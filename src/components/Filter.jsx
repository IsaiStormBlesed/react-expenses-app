const Filter = ({ filter, setFilter }) => {
  return (
    <div className="filtros sombra contenedor">
      <form>
        <div className="campo">
          <label>Filter Expenses</label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="" disabled>-- Select --</option>
            <option value="all">All</option>
            <option value="savings">Savings</option>
            <option value="food">Food</option>
            <option value="house">House</option>
            <option value="health">Health</option>
            <option value="leisure">Leisure</option>
            <option value="subscriptions">Subscriptions</option>
            <option value="other">Other</option>
          </select>
        </div>
      </form>
    </div>
  )
};

export default Filter;
