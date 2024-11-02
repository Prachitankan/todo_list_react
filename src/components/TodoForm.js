import React, { useState } from 'react';

export const TodoForm = ({ onAddTodo }) => {
    const [inputValue, setInputValue] = useState({ id: '', content: '', checked: false });

    const handleInputChange = (value) => {
        setInputValue({ id: value, content: value, checked: false });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onAddTodo(inputValue);
        setInputValue({ id: '', content: '', checked: false });
    };

    return (
        <section className="form">
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    className="todo-input"
                    autoComplete="off"
                    value={inputValue.content}
                    onChange={(e) => handleInputChange(e.target.value)}
                />
                <button type="submit" className="todo-btn">Add Task</button>
            </form>
        </section>
    );
};
