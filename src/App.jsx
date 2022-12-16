import React, { useState } from 'react';
import TodoList from './components/TodoList/TodoList';
import Header from './components/Header/Header';
import { DarkModeProvider } from './context/DarkModeContext';
import styles from './css/App.module.css';

export default function App() {
  const filters = ['all', 'active', 'completed'];
  const [filter, setFilter] = useState(filters[0]);
  return (
    <main className={styles.container}>
      <div className={styles.wrap}>
        <DarkModeProvider>
          <Header filters={filters} filter={filter} onFilterChange={setFilter}></Header>
          <TodoList filter={filter}></TodoList>
        </DarkModeProvider>
      </div>
    </main>
  );
}
