import { useState } from 'react'
import Todo from "./components/Todo"
import Forms from './components/Forms'

import './App.css'


function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade do sistema",
      category: "Trabalho",
      isComplented: false,
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      isComplented: false,
    },
    {
      id: 3,
      text: "Estudar tecnologia",
      category: "Estudo",
      isComplented: false,
    }
  ])

  const AddToDo = (text, category) => {
    const newToDo = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isComplented: false
    }]

    setTodos(newToDo);

  }

  return (
    <div className='app' >
      <h1>Lista de tarefas</h1>
      <div className='Todo-List'>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
      </div>
      <Forms AddToDo={AddToDo}/>
    </div>
  )
}

export default App
