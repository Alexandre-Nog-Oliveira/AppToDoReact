const Filter = ({filter, setFilter}) => {
  return (
    <div className="filter" >
        <h3>Filtrar</h3>
        <div className="filter-options">
            <p>Status:</p>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="All">Todas</option>
                <option value="Completed">Completas</option>
                <option value="Incompleted">Incompletas</option>
            </select>
        </div>
    </div>
  )
}

export default Filter