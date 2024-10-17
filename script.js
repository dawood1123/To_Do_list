function addTask(){ 

    var task_input = document.getElementById("text-input"); 
    var taskList = document.getElementById("list"); 

    var li = document.createElement("li"); 
    li.textContent= task_input.Value; 

    var removeButton = document.createElement('button'); 
    removeButton.textContent= "Remove"
    removeButton.className= "Remove-btn"
    removeButton.onclick= function (){ 
        
    }

}