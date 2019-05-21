class Task {
  constructor(description){
    this.description = description
  }

  render(){
    return `
      <li>
        ${this.description}
        <button class="deleter" data-desc-task="${this.description}">X</button>
      </li>
    `
    
  }

}
