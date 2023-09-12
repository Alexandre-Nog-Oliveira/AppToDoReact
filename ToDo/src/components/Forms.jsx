import {useState} from 'react'

const Forms = ({AddToDo}) => {

    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const hadleSubmit = (e) =>{
        e.preventDefault();
        if(!value || !category) return;
        console.log(value, category);
        AddToDo(value, category)
        setValue("");
        setCategory("");
    }

  return (
    <div className='todo-form'>
        <h2>Criar tarefa:</h2>
        <form onSubmit={hadleSubmit}>
            <input type='text' placeholder='Nome da tarefa' value={value} onChange={(e)=> setValue(e.target.value)} />
            <select value={category} onChange={(e)=> setCategory(e.target.value)}>
                <option value="">Escolha uma categoria</option>
                <option value="Estudos">Estudos</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Trabalho">Trabalho</option>
            </select>
            <button type='submit'>Criar tarefa</button>
        </form>
    </div>
  )
}

export default Forms