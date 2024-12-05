document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.querySelector(".addTask");
    const taskContainer = document.querySelector(".task");
  
    function addTask(taskText) {
      if (taskText.trim() === "") return;
  
      const taskWrapper = document.createElement("div");
      taskWrapper.className = "task-wrapper new-task";
  
      const newTask = document.createElement("p");
      newTask.textContent = taskText;
      newTask.className = "task-item";
  
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.className = "delete-btn";
  
      deleteButton.addEventListener("click", () => {
        taskWrapper.classList.add("removing-task");
        setTimeout(() => {
          taskContainer.removeChild(taskWrapper);
          adjustContainerHeight();
        }, 300);
      });
  
      taskWrapper.appendChild(newTask);
      taskWrapper.appendChild(deleteButton);
  
      taskContainer.appendChild(taskWrapper);
  
      adjustContainerHeight();
      inputField.value = "";
  
      setTimeout(() => taskWrapper.classList.remove("new-task"), 300);
    }
  
    function adjustContainerHeight() {
      taskContainer.style.maxHeight = `${taskContainer.scrollHeight}px`;
    }
  
    inputField.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        addTask(inputField.value);
      }
    });
  });
  