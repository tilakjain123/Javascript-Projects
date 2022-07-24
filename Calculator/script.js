// display function
function display(val){

    document.getElementById('result').value += val

    return val

}
// Main logic
function solve(){

    let x = document.getElementById('result').value

    let y = eval(x);

    document.getElementById('result').value = y

    return y
}
// Erase the screen
function clearScreen(){

    document.getElementById('result').value = ''

}
