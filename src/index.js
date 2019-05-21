document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();

  const listContainer = document.getElementById("list");
  const renderApp = () => listContainer.innerHTML = taskList.render();
  renderApp()

  // Add Form Behavior Here!
  const taskForm = document.getElementById("create-task-form")
  taskForm.addEventListener("submit", function(){
    event.preventDefault()
    let userInput = document.getElementById("new-task-description").value
    taskList.createTask(userInput)
    console.log(taskList.tasks)
    event.target.reset()
    renderApp()
  })

  listContainer.addEventListener("click", function(){
    if (event.target.className === "deleter") {
      let description = event.target.dataset.descTask
      taskList.deleteTask(description)
      renderApp()
    }
  })
});
