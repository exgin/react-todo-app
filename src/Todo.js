import React, { useState } from 'react';
import './Todo.css';

const Todo = ({ id, task, removeTodo, editTodo }) => {
  // add state since we need to keep track of when we're editing a task
  const [updateTask, setUpdateTask] = useState(task);

  // keep track of is task being edited
  const [editing, setEditing] = useState(false);

  const toggleEdit = () => {
    setEditing((editing) => (editing = true));
  };

  // add remove fn
  const handleRemove = () => {
    removeTodo(id);
  };

  //   add edit fn
  const handleEdit = (e) => {
    e.preventDefault();
    editTodo(id, updateTask);
    setEditing(false);
  };

  //   add to target the todo's text
  const handleText = (e) => {
    setUpdateTask(e.target.value);
  };

  let todoTask = (
    <div className='Todo'>
      <li className='Todo-task'>
        {task}
        {' | '}
        <span className='Todo-remove' onClick={handleRemove}>
          X
        </span>{' '}
        <spam className='Todo-edit' onClick={toggleEdit}>
          Edit
        </spam>
      </li>
    </div>
  );

  if (editing === true) {
    todoTask = (
      <div className='Todo'>
        <form onSubmit={handleEdit}>
          <label htmlFor='edit-todo'></label>
          <input id='edit-todo' name='edit-todo' value={updateTask} onChange={handleText} />
          <button>Edit!</button>
        </form>
      </div>
    );
  }

  return todoTask;
};

export default Todo;
