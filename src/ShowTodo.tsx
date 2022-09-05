import React from 'react';
import { ITodo } from './interfaces/todoInterface';

interface Props {
    todo: ITodo
}

const ShowTodo = ({ todo }: Props) => {
    return (
        <div>
            <h1>{todo.todo}</h1>
            <h1>{todo.timeline}</h1>
        </div>
    );
};

export default ShowTodo;