import React from 'react';
import { MdCheck, MdDeleteForever } from 'react-icons/md';

export const TodoList = ({ data, checked, onHandleTodoDelete, onHandleCheckedTodo }) => (
    <li className="todo-item">
        <span className={checked ? 'checkList' : 'notCheckList'}>{data}</span>
        <button className={checked ? 'check-btn' : 'befor-check'} onClick={() => onHandleCheckedTodo(data)}>
            <MdCheck />
        </button>
        <button className="delete-btn" onClick={() => onHandleTodoDelete(data)}>
            <MdDeleteForever />
        </button>
    </li>
);
