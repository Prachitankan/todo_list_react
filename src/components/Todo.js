import React from 'react';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { TodoDate } from './TodoDate';
import { useTodo } from './TodoContext';

export const Todo = () => {
    const { tasks, addTodo, deleteTodo, toggleTodo, clearAll } = useTodo();

    return (
        <section className="todo-container">
            <header className="header">
                <h1>Todo List</h1>
                <TodoDate />
            </header>

            <TodoForm onAddTodo={addTodo} />

            <section className="myUnOrdList">
                <ul>
                    {tasks.map((task) => (
                        <TodoList
                            key={task.id}
                            data={task.content}
                            checked={task.checked}
                            onHandleTodoDelete={deleteTodo}
                            onHandleCheckedTodo={toggleTodo}
                        />
                    ))}
                </ul>
            </section>

            <button className="clear-btn" onClick={clearAll}>Clear all</button>
        </section>
    );
};
