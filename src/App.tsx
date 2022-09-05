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


  const handleSubmit = (): void => {
    const newTodo = { todo, timeline }
    setAllTodo([...allTodo, newTodo])
    console.log(allTodo)
  }


  return (
    <div>
      <input
        className='border border-amber-600 focus outline-none'
        type="text"
        name="todo"
        onChange={handleChange}
      />
      <input
        className='border border-amber-600 focus outline-none'
        type="number"
        name="day"
        value={timeline}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>ADD</button>
      {
        allTodo.map((sTodo: ITodo, key: number) => {
          return (
            <ShowTodo key={key} todo={sTodo} />
          )
        })
      }
    </div>
  );
};

export default App;
