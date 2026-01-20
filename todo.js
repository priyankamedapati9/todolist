
	let input=document.getElementById('input');
	let taskList=document.getElementById("tasklist");

	function addtask(event){
    event.preventDefault(); 
let task=input.value;
  if (task == "") {alert("nothing to add!");
  	return;
  }
	let li=document.createElement("li");
	li.textContent = task;
	let del=document.createElement("button");
	del.textContent="delete";
	del.addEventListener("click",function(){
		taskList.removeChild(li);
	});
	li.appendChild(del);
taskList.appendChild(li);
input.value="";
}