import React, { useState, useEffect } from "react";

function Todo() {
  const [todos, setTodos] = useState([{
  }]);
  const [newTodo, setNewTodo] = useState("");

  const saveData = (newTodos) => {
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  useEffect(() => {
    if (localStorage.getItem("todos")) {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  }, []);

  const onAddTodo = () => {
    if (newTodo.trim()) {
      let newTodos = [...todos, { todo: newTodo.trim(), completed: false , id: todos.length+1}];
      setTodos(newTodos);
      setNewTodo("");
      saveData(newTodos);
    }
  };

  const completeTask = (id) =>{
    let newTodos = [...todos];
    let arrNew = []
    for(let i=0; i< newTodos.length; i++){
      if (newTodos[i].id === id)
        newTodos[i].completed = true;
        arrNew.push(newTodos[i])
    }
    
    setTodos(arrNew);
    setNewTodo("");
    saveData(arrNew)
    console.log(arrNew)
  }

  const deleteTodo = (id) => {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    saveData(newTodos);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Todo</h2>

      <table className="table table-dark mt-5">
        <thead>
          <tr>
            <th>
              <input
                type="text"
                id="todoInput"
                className="form-control"
                placeholder="add todo"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
              />
            </th>
            <th>
              <button className="btn btn-primary btn-block" onClick={onAddTodo}>
                {" "}
                Add
              </button>
            </th>
          </tr>
        </thead>

        <thead>
          <tr>
            <th scope="col" colSpan="2">
              Task
            </th>
            <th scope="col"></th>
          </tr>
        </thead>

        <tbody id="table" >
          {todos.map((todo) => (
            <tr key={todo.id} >
              <td style={{ textDecoration: todo.completed ? "line-through" : "" }}>{todo.todo}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() =>{
                    deleteTodo(todo.id) 
                    console.log(todo.id)}}
                >
                  {" "}
                  Delete{" "}
                </button>{" "}
                <button onClick={() => completeTask(todo.id)}>Complete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Todo;