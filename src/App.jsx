import React, { useState, useEffect } from "react";
import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";

export default function App() {
  const LOCAL_STORAGE_KEY = "todoItems";

  const [todoItems, setTodoItems] = useState(() => {
    const savedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoItems));
  }, [todoItems]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate, completed: false },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  const handleToggleComplete = (todoItemName) => {
    const updatedTodos = todoItems.map((item) =>
      item.name === todoItemName
        ? { ...item, completed: !item.completed }
        : item
    );
    setTodoItems(updatedTodos);
  };

  const handleClearAll = () => {
    setTodoItems([]);
  };

  const filteredTodos = todoItems.filter((item) => {
    if (filter === "completed") return item.completed;
    if (filter === "pending") return !item.completed;
    return true;
  });

  return (
    <>
      <div className="marquee-container">
        <p className="marquee-text">
          "Stay productive. Plan your day with this To-Do App!"
        </p>
      </div>
      <div className="todo-container">
        <AppName />
        <p className="quote">"Your future is created by what you do today!"</p>
        <AddTodo onNewItem={handleNewItem} />
        <div className="filters">
          <button onClick={() => setFilter("all")}>All</button>
          <button onClick={() => setFilter("completed")}>Completed</button>
          <button onClick={() => setFilter("pending")}>Pending</button>
        </div>
        {todoItems.length === 0 && <WelcomeMessage />}
        <TodoItems
          todoItems={filteredTodos}
          onDeleteClick={handleDeleteItem}
          onToggleComplete={handleToggleComplete}
        />
        {todoItems.length > 0 && (
          <button className="clear-btn" onClick={handleClearAll}>
            Clear All
          </button>
        )}
      </div>
    </>
  );
}
