const Filter = () => {
  return (
    <div className="filter" >
        <h3>Filtrar:</h3>
        <div className="filter-options">
            <p>Status:</p>
            <select>
                <option value="All">Todas</option>
                <option value="Completed">Completas</option>
                <option value="Incompleted">Incompletas</option>
            </select>
        </div>
        <div>
            <p>Ordem alfabetica</p>
            <button>Asc</button>
            <button>Desc</button>
        </div>
    </div>
  )
}

export default Filter