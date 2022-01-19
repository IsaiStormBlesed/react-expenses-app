import { useEffect, useState } from "react";


export const BudgetControl = ({ budget, expenses }) => {
  console.log(expenses);

  const [spent, setSpent] = useState(0)
  const [available, setAvailable] = useState(0)

  useEffect(() => {
    const totalSpent = expenses.reduce((total, expense) => {
      return Number(expense.amount) + total 
    }, 0)

    const totalAvailable = budget - totalSpent

    setAvailable(totalAvailable)
    setSpent(totalSpent)
  }, [expenses]);
  

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
          <span>Available: </span>{budgetToMoneyForm(available)}
        </p>
        <p>
          <span>Spent: </span>{budgetToMoneyForm(spent)}
        </p>
      </div>
    </div>
  )
}
