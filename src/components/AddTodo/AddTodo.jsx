import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './AddTodo.module.css';

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState('');
  const handleChange = e => {
    setText(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim() === '') {
      alert('할 일을 입력해주세요.');
      return;
    }
    onAdd({
      id: uuidv4(),
      text,
      status: 'active',
    });
    setText('');
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input type='text' placeholder='할 일을 추가하세요.' value={text} onChange={handleChange} />
      <button type='submit'>ADD</button>
    </form>
  );
}
