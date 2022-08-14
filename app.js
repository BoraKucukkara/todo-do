let active = 0;
let passive = 0;
let total = 0;
let identity = [];

function onLoadFocus() {
    document.getElementById("newtask").focus();
}
function add() {
    let todoekle = document.getElementById("newtask").value
    if (todoekle === "" || todoekle === " ") {
        return;
    }
    let liid = total + 1; 
    let ul = document.getElementById("tasks");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(todoekle)); 
    li.setAttribute("id", liid); 
    ul.appendChild(li);
    document.getElementById(liid).className = "list-group-item list-group-item-action"
    li.setAttribute("onclick", "tamam(" + liid + "); this.classList.add('done');");
    identity.push(liid);
    active = identity.length;
    total = identity.length;
    document.getElementById("activebox").innerText = total;
    document.getElementById("bodytext").innerText = "";
    document.getElementById("newtask").focus();
    document.getElementById("newtask").value = "";
    document.getElementById("idbox").innerText = identity;
}
function tamam(taskid) { 
    passive++
    active--
    document.getElementById("passivebox").innerText = passive;
    document.getElementById(taskid).removeAttribute("onclick"); 
    if (passive === total) {
        document.getElementById("bodytext").innerText = "Well done! All tasks completed!";
    }
    loadbar();
}
function loadbar() {
    let yuzdekac = ((100 / total) * passive);
    document.getElementById("loading").setAttribute("style", "width:" + yuzdekac + "%;");
}
function reset() { 
    passive = 0
    active = 0
    total = 0
    document.getElementById("passivebox").innerText = passive;
    document.getElementById("activebox").innerText = active;
    document.getElementById("newtask").focus();
    document.getElementById("newtask").value = ""
    document.getElementById("loading").setAttribute("style", "width:0%;");
    document.getElementById("loading").innerText = ""
}
window.clearall = function () { 
    var ul = document.querySelector('.tasks');
    var listLength = ul.children.length;
    for (i = 0; i < listLength; i++) {
        ul.removeChild(ul.children[0]);
    }
    reset();
    document.getElementById("bodytext").innerText = "Add a new task";
    identity = []
    document.getElementById("idbox").innerText = identity;
}
