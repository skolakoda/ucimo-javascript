describe('Testiranje funkcionalnosti TODO liste', () => {

  it('should add an item', () => {
    let todo = new ToDo();
    let item = {
      title: "get milk",
      complete: false
    }
    const done = todo.addTodo(item)
    expect(todo.getItems().length).toBe(1);
  })

  it('should delete an item', () => {
    let todo = new ToDo();
    let item = {
      id: 1,
      title: "get milk 1",
      complete: false
    }
    let item2 = {
      id: 2,
      title: "get milk 2",
      complete: false
    }
    todo.addTodo(item)
    todo.addTodo(item2)
    todo.delete(2)
    expect(todo.getItems()[todo.getItems().length - 1].id).toBe(1);
  })

  it('should mark item as complete', function () {
    let todo = new ToDo();
    let item = {
      id: 1,
      title: "get milk 1",
      complete: false
    }
    let item2 = {
      id: 2,
      title: "get milk 2",
      complete: false
    }
    todo.addTodo(item)
    todo.addTodo(item2)
    todo.complete(2)
    expect(todo.getItems().find(item => item.id == 2).complete).toBe(true);
  })

})