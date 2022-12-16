import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import styles from './Todo.module.css';

export default function Todo({ todo, onUpdate, onDelete }) {
  const { text, status, id } = todo;
  const handleChange = e => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  };
  const handleDelete = e => {
    onDelete(todo);
  };
  return (
    <li className={styles.li}>
      <input type='checkbox' id={id} checked={status === 'completed'} onChange={handleChange} />
      <label htmlFor={id}>{text}</label>
      <button type='button' onClick={handleDelete} className={styles.del}>
        <FaTrashAlt />
      </button>
    </li>
  );
}
