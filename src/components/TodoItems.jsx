import React from "react";
import styles from "./TodoItems.module.css"; // Importing CSS Module

export default function TodoItems({ todoItems, onDeleteClick, onToggleComplete }) {
  return (
    <ul className={styles.todoList}>
      {todoItems.map((item) => (
        <li key={item.name} className={styles.todoItem}>
          <span className={`${styles.taskText} ${item.completed ? styles.completed : ""}`}>
            {item.name} - {item.dueDate}
          </span>
          <div className={styles.buttonGroup}>
            <button
              className={`${styles.btn} ${item.completed ? styles.undo : styles.done}`}
              onClick={() => onToggleComplete(item.name)}
            >
              {item.completed ? "Undo" : "Complete"}
            </button>
            <button className={`${styles.btn} ${styles.deleteBtn}`} onClick={() => onDeleteClick(item.name)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
