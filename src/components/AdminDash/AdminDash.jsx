import React, { useState } from 'react';
import axios from 'axios';
import firebase from '../../utils/firebase';

const AdminDash = () => {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const todoRef = firebase.database().ref('Todo');
    const todo = { name, complete: false };
    todoRef.push(todo);
  };

  return (
    <div>
      <h1>Todo</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' value={name} onChange={handleChange} />
        <button type='submit'>Add todo</button>
      </form>
    </div>
  );
};

export default AdminDash;
