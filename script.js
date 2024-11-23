

function addTask() { 
    var task_input = document.getElementById("text-input"); 
    var taskList = document.getElementById("list"); 

    if (!task_input.value.trim()) { 
        return alert("To do can't be empty");
    }

    var li = document.createElement("li"); 
    li.textContent = task_input.value;  // Fixed typo here

    var removeButton = document.createElement('button'); 
    removeButton.textContent = "Remove";
    removeButton.className = "Remove-btn";
    removeButton.onclick = function () { 
        taskList.removeChild(li); 
    }

    li.onclick = function() {
        li.classList.toggle('completed');  // Fixed how you toggle the class
    }

    // Append the remove button to the list item
    li.appendChild(removeButton);

    // Append the list item to the task list
    taskList.appendChild(li);

    // Clear the input field
    task_input.value = '';  // Fixed clearing the correct input element

    
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
}); 
