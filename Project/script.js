function addTask() {
        var input = document.getElementById("taskInput").value;
        if (input.trim() !== "") {
            var element = document.createElement("div");
            element.className = "sub-task";
            element.innerHTML = `<label>${input}</label> <button onclick="deleteTask(this)">Delete</button>`;
            var addElement = document.getElementById("main-task");
            addElement.appendChild(element);
            document.getElementById("taskInput").value = "";
        } else {
            alert("Please enter a task.");
        }
    }
    function deleteTask(button) {
        
        button.parentElement.remove();
    }
    