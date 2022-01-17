const Expense = ({ exp }) => {
  console.log(exp);
  return (
    <div>
      <div className="contenido-gasto">
        <div className="descripcion-gasto">
          <p className="categoria">{exp.category}</p>
          <p className="nombre-gasto"></p>
          <p className="fecha-gasto"></p>
        </div>
      </div>
    </div>
  )
}

export default Expense
