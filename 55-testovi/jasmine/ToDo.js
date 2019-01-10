class ToDo {
  constructor() {
    this.list = []
  }

  addTodo (item) {
    this.list.push(item)
  }
  
  getItems () {
    return this.list
  }
  
  delete (id) {
    this.list = this.list.filter(item => item.id !== id)
  }
  
  complete (id) {
    this.list.find(item => item.id == id).complete = true
  }
}
