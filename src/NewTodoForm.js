import React, { useState } from 'react';

const NewTodoForm = ({ addTodo }) => {
  const INT_STATE = { text: '' };

  const [formData, setFormData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ ...formData });
    setFormData(INT_STATE);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='text'>Enter Text Here</label>
      <input id='text' name='text' value={formData.text} onChange={handleChange} />
      <button>Add task</button>
    </form>
  );
};

export default NewTodoForm;
