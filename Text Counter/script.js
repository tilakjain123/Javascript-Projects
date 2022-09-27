let stats = document.querySelector('.status');
	let text = document.getElementById('text');
	let char = document.getElementById('char');
	let words = document.getElementById('words');
	let lines = document.getElementById('lines');
	let symbols = document.getElementById('symbols');
		function count() {
		if(text.value.length === 0){ // can be easily done using CSS, check CSS for that
			stats.style.display = "none";
		}
		else{
			stats.style.display = "block";
			char.innerHTML = text.value.length + " Characters" //char
		words.innerHTML = text.value.trim().split(/\s+/).length + " Words"; //words
		lines.innerHTML = text.value.split("\n").length + " Lines"; //lines
		symbols.innerHTML = text.value.split(/[!@#$%^&*+()_={};:'"<>.,?/-]/).length + " Symbols"
		}
	}
text.addEventListener("input", count);
