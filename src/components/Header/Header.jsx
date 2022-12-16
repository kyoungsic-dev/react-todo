import React from 'react';
import { useDarkMode } from '../../context/DarkModeContext';
import { HiMoon, HiSun } from 'react-icons/hi';
import styles from './Header.module.css';

export default function Header({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <header className={styles.header}>
      <button type='button' className={styles.mode} onClick={toggleDarkMode}>
        {!darkMode && <HiMoon />}
        {darkMode && <HiSun />}
      </button>
      <nav>
        {filters.map((value, idx) => {
          return (
            <button
              key={idx}
              className={`${filter === value && 'selected'}`}
              onClick={e => {
                onFilterChange(value);
              }}>
              {value}
            </button>
          );
        })}
      </nav>
    </header>
  );
}
