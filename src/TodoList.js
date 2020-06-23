import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import { v4 as uuid } from 'uuid';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  //   pass down to Todo
  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  // pass down to Todo | within the todo's array, map over & match the id to the one passed in, if correct
  //   .... set the task, which is our text, to the updated task. ELSE ignore and return todo
  const editTodo = (id, updatedTodo) => {
    setTodos((todos) => todos.map((todo) => (todo.id === id ? { ...todo, task: updatedTodo } : todo)));
  };

  //   pass down to TodoList
  const addTodo = (todo) => {
    let newTodo = { ...todo, id: uuid() };
    setTodos((todos) => [...todos, newTodo]);
  };

  const allTodoComps = todos.map((todo) => <Todo id={todo.id} key={todo.id} task={todo.text} editTodo={editTodo} removeTodo={removeTodo} />);

  return (
    <div className='TodoList'>
      <NewTodoForm addTodo={addTodo} />
      <ul>{allTodoComps}</ul>
    </div>
  );
};

export default TodoList;
