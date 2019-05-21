class TaskList {
  constructor() {
    this.tasks = []
  }

  render() {
    let ul = "<h2>My To-Dos</h2><ul>"
    ul += this.tasks.map(task => task.render()).join("")
    ul += "</ul>"
    return ul
  }

  createTask(description){
    let newTask = new Task(description)
    this.tasks.push(newTask)
  }

  deleteTask(description){
    this.tasks = this.tasks.filter(task => task.description !== description)
  }
}
