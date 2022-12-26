var count = isNaN(parseInt(localStorage.getItem('counter'))) ? 0 : parseInt(localStorage.getItem('counter'));

if (count == 0)
{
	count = 1;
	localStorage.setItem('counter',count);
}

var tasksList = new Map(JSON.parse(localStorage.getItem('tasksList')));
	
window.onload = (event) => {
	
if (tasksList.size > 0)
{
	for (let [key, value] of  tasksList.entries()) {
		
		if (key % 2 == 0)
		{
			document.querySelector('#tasks').innerHTML += `
			<div class="task">
				<span id="taskname">
					${ "#"+ key + " - " + value}
				</span>
				<button class="delete">
					<i class="far fa-trash-alt"></i>
				</button>
			</div>
			`;
		}
		else
		{
			document.querySelector('#tasks').innerHTML += `
			<div class="task1">
				<span id="taskname">
					${ "#"+ key + " - " + value}
				</span>
				<button class="delete">
					<i class="far fa-trash-alt"></i>
				</button>
			</div>
			`;
		}
		count = key+1;
	}
	
	let current_tasks = document.querySelectorAll(".delete");
	for(let i=0; i<current_tasks.length; i++){
			current_tasks[i].onclick = function(){
			this.parentNode.remove();
			//console.log(parseInt(this.parentNode.innerText.trim().split("-")[0].replace("#","")));
			tasksList.delete(parseInt(this.parentNode.innerText.trim().split("-")[0].replace("#","")));
			localStorage.setItem('tasksList', JSON.stringify([...tasksList]));
			}
	}
}

	document.querySelector('#push').onclick = function(){
		if(document.querySelector('#newtask input').value.length == 0){
			alert("Please Enter a Task")
		}
		else{
			document.querySelector('#tasks').innerHTML += `
				<div class="task">
					<span id="taskname">
						${ "#"+count + " - " + document.querySelector('#newtask input').value}
					</span>
					<button class="delete">
						<i class="far fa-trash-alt"></i>
					</button>
				</div>
			`;

			tasksList.set(count, document.querySelector('#newtask input').value);
			
			localStorage.setItem('tasksList', JSON.stringify([...tasksList]));
			
			document.querySelector('#newtask input').value = "";
			
			document.querySelector('#newtask input').focus();
			count++;
			
			let current_tasks = document.querySelectorAll(".delete");
			for(let i=0; i<current_tasks.length; i++){
					current_tasks[i].onclick = function(){
					this.parentNode.remove();
					//console.log(parseInt(this.parentNode.innerText.trim().split("-")[0].replace("#","")));
					tasksList.delete(parseInt(this.parentNode.innerText.trim().split("-")[0].replace("#","")));
					localStorage.setItem('tasksList', JSON.stringify([...tasksList]));
					}
				}
			}
	}
}
