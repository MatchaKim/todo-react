import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/list')
      .then(response => {
        setTodos(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleDeleteClick = (id) => {
    axios.delete(`http://localhost:8080/delete?id=${id}`)
      .then(response => {
        setTodos(todos.filter(todo => todo.id !== id));
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8080/save', { "detail": newTodo })
    .then(response => {
      const newTodoData = response.data;
      setTodos([...todos, newTodoData]);
      setNewTodo('');
      axios.get('http://localhost:8080/list')
        .then(response => {
          setTodos(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    })
    .catch(error => {
      console.error(error);
    });
};
  
  const todoElements = todos.map(todo => (
  <div className="todo-item" key={todo.id}>
  <div className="todo-item__detail">{todo.detail}</div>
  <button
  className="todo-item__delete"
  onClick={() => handleDeleteClick(todo.id)}
  >
  삭제
  </button>
  </div>
  ));
  
  return (
  <div className="todo-list">
  <form className="todo-form" onSubmit={handleNewTodoSubmit}>
  <input
         className="todo-input"
         type="text"
         value={newTodo}
         onChange={handleNewTodoChange}
         placeholder="할 일을 입력하세요"
       />
  <button className="todo-button" type="submit">
  추가
  </button>
  </form>
  {todos.length === 0 && (
  <div className="todo-list__empty">할 일이 없습니다.</div>
  )}
  {todoElements}
  </div>
  );
  }
  
  export default TodoList;