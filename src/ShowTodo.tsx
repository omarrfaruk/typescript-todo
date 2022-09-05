import React from 'react';
import { ITodo } from './interfaces/todoInterface';

interface Props {
    todo: ITodo,
    updateTodo(todoName: string): void
}

const ShowTodo = ({ todo, updateTodo }: Props) => {
    return (
        <div className='flex justify-center mt-4'>
            <div className='flex w-1/4'>
                <h1 className='text-center bg-yellow-500 py-2 w-2/4 '>{todo.todo}</h1>
                <h1 className='text-center bg-yellow-200 py-2 w-1/4'>{todo.timeline}</h1>
                <button onClick={() => updateTodo(todo.todo)} className='w-1/4 bg-teal-600 py-2 text-white'>x</button>
            </div>
        </div>
    );
};

export default ShowTodo;