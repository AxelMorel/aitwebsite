/*init 
called when body loaded
*/

function init(){
        document.getElementById("test").innerHTML ="init says HI!";
}

function test_button(){

    document.getElementById("test").style.backgroundColor = "red";
    document.getElementById("test").innerHTML ="button cliked";
    alert("cliked");
    

}