export const BudgetControl = ({ budget }) => {
  
  function budgetToMoneyForm(num) {
    return Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(num)
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Here goes the graphic</p>
      </div>

      <div className="contenido-presupuesto">
        <p>
          <span>Budget: </span>{budgetToMoneyForm(budget)}
        </p>
        <p>
          <span>Available: </span>{budgetToMoneyForm(0)}
        </p>
        <p>
          <span>Spent: </span>{budgetToMoneyForm(0)}
        </p>
      </div>
    </div>
  )
}
