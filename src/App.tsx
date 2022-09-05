import React, { ChangeEvent, FC, useState } from 'react';
import { ITodo } from './interfaces/todoInterface';
import ShowTodo from './ShowTodo';

const App: FC = () => {



  const [todo, setTodo] = useState<string>("")
  const [timeline, setTimeline] = useState<number>(0)
  const [allTodo, setAllTodo] = useState<ITodo[]>([])

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === 'todo') {
      setTodo(e.target.value)

    } else {
      setTimeline(Number(e.target.value))
    }

  }

  const newTodo = { todo, timeline }

  const handleSubmit = (): void => {
    setAllTodo([...allTodo, newTodo])
    setTimeline(0)
    setTodo("");
  }

  const deleteTodo = (thisTodoForDelete: string): void => {
    const notDeletedItem = allTodo.filter(t => t.todo !== thisTodoForDelete)
    setAllTodo(notDeletedItem)
  }


  return (
    <div>
      <div className='bg-teal-600 h-[30vh] flex items-center'>
        <div className='flex flex-col mx-auto w-1/4 gap-2 '>
          <input
            className='border border-slate-500 focus outline-none py-1 px-2 rounded-md '
            type="text"
            name="todo"
            placeholder='Add task...'
            required
            value={todo}
            onChange={handleChange}
          />
          <input
            className='border border-slate-500 focus outline-none py-1 px-2 rounded-md'
            type="number"
            name="day"
            required
            value={timeline}
            onChange={handleChange}
          />
          <button
            className='py-1 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'
            onClick={handleSubmit}>ADD</button>

        </div>
      </div>
      <div className='mt-4 h-[70vh]'>
        {
          allTodo.map((sTodo: ITodo, key: number) => {
            return (
              <ShowTodo key={key} todo={sTodo} updateTodo={deleteTodo} />
            )
          })
        }
      </div>
    </div>
  );
};

export default App;
