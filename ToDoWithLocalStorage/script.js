document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById("taskInput");
    todoInput.focus(); // Set focus on input when page loads

    const addTaskBtn = document.getElementById("add-task-btn");
    const todoList = document.getElementById("todo-list");

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Render each stored task
    tasks.forEach(task => createTaskElement(task));

    function handleAddTask() {
        const taskText = todoInput.value.trim();
        if (taskText === "") return;

        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false
        };

        tasks.push(newTask);
        createTaskElement(newTask);
        saveTasks();
        todoInput.value = ""; // Clear input
        todoInput.focus(); // Keep focus on input after adding task
    }

    addTaskBtn.addEventListener("click", handleAddTask);

    // Fix: Keydown event should be on the input field, not the button
    todoInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            handleAddTask();
        }
    });

    function createTaskElement(task) {
        const li = document.createElement('li');
        li.setAttribute('data-id', task.id);
        li.draggable = true; // Enable dragging
        li.className = "flex justify-between text-white mr-2 text-2xl items-center p-4 bg-gray-800 rounded-md cursor-pointer";

        const span = document.createElement('span');
        span.textContent = task.text;
        span.style.textDecoration = task.completed ? 'line-through' : 'none';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;

        const deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('data-id', task.id);
        deleteBtn.className = 'li-btn-class';
        deleteBtn.innerHTML = `❌`;

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);

    // Event listeners for drag and drop
    li.addEventListener('dragstart', handleDragStart);
    li.addEventListener('dragover', handleDragOver);
    li.addEventListener('drop', handleDrop);


        // Checkbox change event to update completion state
        checkbox.addEventListener('change', (e) => {
            task.completed = e.target.checked;
            span.style.textDecoration = task.completed ? 'line-through' : 'none';
            saveTasks();
        });

        // Delete task event
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            tasks = tasks.filter((t) => t.id !== task.id);
            li.remove();
            saveTasks();
        });
    }


    function handleDragStart(e) {
        // Store the id of the dragged task
        e.dataTransfer.setData('text/plain', e.currentTarget.dataset.id);
      }
    
      function handleDragOver(e) {
        e.preventDefault(); // Necessary to allow a drop
        e.dataTransfer.dropEffect = 'move';
      }
    
      function handleDrop(e) {
        e.preventDefault();
        const draggedId = e.dataTransfer.getData('text/plain');
        const targetLi = e.currentTarget;
        const targetId = targetLi.dataset.id;
    
        // Prevent dropping on itself
        if (draggedId === targetId) return;
    
        // Find the indexes in the tasks array
        const draggedIndex = tasks.findIndex(task => task.id == draggedId);
        const targetIndex = tasks.findIndex(task => task.id == targetId);
    
        // Remove the dragged task and insert it at the target position
        const [draggedTask] = tasks.splice(draggedIndex, 1);
        tasks.splice(targetIndex, 0, draggedTask);
    
        // Re-render the list: clear the current list and re-create each task element
        todoList.innerHTML = '';
        tasks.forEach(task => createTaskElement(task));
        saveTasks();
      }

    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
});
