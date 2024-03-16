let type = document.getElementById("type").value;
let region = document.getElementById("region").value;

function myFunction(){
if(type == "public"){
	document.location.href = "test.html";
}
else if(type == "private"){
	document.location.href = "test2.html";
}
}
var btn = document.getElementById("btn");
btn.addEventListener("submit", myFunction);

