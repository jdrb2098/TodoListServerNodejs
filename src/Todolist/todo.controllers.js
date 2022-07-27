const todoListDB = [
    {
      id: 1,
      task: "",
      isDone: false,
      createdAt: "",
      description: "",
    },
  ];
 
  
  //? El controlador para retornar todos mis usuarios
  const getAllTodoLists = () => {
    return todoListDB;
  };
  
  const getTodoListById = (id) => {
    const filteredDB = todoListDB.filter((todoList) => todoList.id === id);
    return filteredDB[0];
  };
  
  const createTodoList = (todoObj) => {
    if (todoListDB.length === 0) {
      const newTodo = {
        id: 1,
        task: todoObj.task,
        description: todoObj.description,
        isDone: todoObj.isDone,
        createdAt: todoObj.createdAt,
        
      };
      todoListDB.push(newTodo);
      return newTodo;
    }
    const newTodo = {
        id: todoListDB[todoListDB.length - 1].id + 1,
        task: todoObj.task,
        description: todoObj.description,
        isDone: todoObj.isDone,
        createdAt: todoObj.createdAt,
    };
    todoListDB.push(newTodo);
    return newTodo;
  };

  const deleteTodo = (id) => {
    const index = todoListDB.findIndex((item) => item.id === id);
    if (index !== -1){
      todoListDB.splice(index, 1)
      return true
    }
    return false
  }
  
  const editTodo = (id, data) => {
    const index = todoListDB.findIndex((item) => item.id === id);
    if (index !== -1){
      todoListDB[index] = data
      return todoListDB[index]
    } else {
      createTodoList(data)
      return todoListDB.at(-1)
    }
  }
  
  module.exports = {
    getAllTodoLists,
    getTodoListById,
    createTodoList,
    deleteTodo,
    editTodo
  };