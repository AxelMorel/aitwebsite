/*init 
called when body loaded
*/

function init(){
    setInterval(timer, 1000)
}

a=0
/*
Executes a function repeats the execution of the function continuously
*/
function timer(){
    a++
    console.log(a)
    document.getElementById("carre").style.Left = "a";
}



