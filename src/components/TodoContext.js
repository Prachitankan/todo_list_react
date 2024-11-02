// TodoContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { getLocalStorageData, setLocalStorageData } from './TodoLocalStorage';

// Create the context
const TodoContext = createContext();

// Custom hook for consuming context
export const useTodo = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
    const [tasks, setTasks] = useState(() => getLocalStorageData());

    useEffect(() => {
        setLocalStorageData(tasks);
    }, [tasks]);

    const addTodo = (todo) => {
        if (!todo.content || tasks.some(t => t.content === todo.content)) return;
        setTasks((prev) => [...prev, todo]);
    };

    const deleteTodo = (content) => {
        setTasks(tasks.filter((task) => task.content !== content));
    };

    const toggleTodo = (content) => {
        setTasks(tasks.map((task) =>
            task.content === content ? { ...task, checked: !task.checked } : task
        ));
    };

    const clearAll = () => setTasks([]);

    return (
        <TodoContext.Provider value={{ tasks, addTodo, deleteTodo, toggleTodo, clearAll }}>
            {children}
        </TodoContext.Provider>
    );
};
