import { useState } from 'react'
import Todo from "./components/Todo"
import Forms from './components/Forms'
import Filter from './components/Filter'

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


  const [filter, setFilter] = useState("All")


  const AddToDo = (text, category) => {
    const newToDo = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isComplented: false
    }]

    setTodos(newToDo);

  }

  const removeToDo = (id) =>{
    const newTodos = [...todos]
    const filterdTodos = newTodos.filter(todo => todo.id !== id ? todo : null)
    setTodos(filterdTodos)
  }


  const completeToDo = (id) =>{
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isComplented = !todo.isComplented  : todo);
    setTodos(newTodos);
  }

  return (
    <div className='app' >
      <h1>Lista de tarefas</h1>
      <Forms AddToDo={AddToDo}/>
      <h2>Minhas tarefas</h2>
      <Filter filter={filter} setFilter={setFilter}/>
      <div className='Todo-List'>
      {todos
      .filter((todo) => filter === "All" ? true : filter === "Completed" ? todo.isComplented : !todo.isComplented)
      .map((todo) => (
        <Todo key={todo.id} todo={todo} removeToDo={removeToDo} completeToDo={completeToDo} />
      ))}
      </div>
    </div>
  )
}

export default App
