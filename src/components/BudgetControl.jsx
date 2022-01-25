import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const BudgetControl = ({ budget, setBudget, expenses, setExpenses, setIsValidBudget }) => {

  const [spent, setSpent] = useState(0)
  const [available, setAvailable] = useState(0)
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const totalSpent = expenses.reduce((total, expense) => {
      return Number(expense.amount) + total 
    }, 0)

    const totalAvailable = budget - totalSpent
    
    const newPercentage = ((totalSpent * 100) / budget).toFixed(2)
    setTimeout(() => {
      setPercentage(newPercentage)
    }, 1000);
    
    setAvailable(totalAvailable)
    setSpent(totalSpent)
  }, [expenses]);
  

  function budgetToMoneyForm(num) {
    return Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(num)
  }

  function handleResetApp() {
    const approvedReset = confirm('Are you sure you want to reset the app?')

    if (approvedReset) {
      setExpenses([])
      setBudget(0)
      setIsValidBudget(false)
    }
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar 
          styles={buildStyles({
            pathColor: percentage > 100 ? '#dc2626' : '#3b82f6',
            trailColor: "#f5f5f5",
            textColor: percentage > 100 ? '#dc2626' : '#3b82f6'
          })}
          value={percentage}
          text={`${percentage}% spent`}
        />
      </div>

      <div className="contenido-presupuesto">
        <button 
          className="reset-app" 
          type="button"
          onClick={handleResetApp}
        >
          Reset App
        </button>
        <p>
          <span>Budget: </span>{budgetToMoneyForm(budget)}
        </p>
        <p className={`${available < 0 ? 'negativo' : ''}`}>
          <span>Available: </span>{budgetToMoneyForm(available)}
        </p>
        <p>
          <span>Spent: </span>{budgetToMoneyForm(spent)}
        </p>
      </div>
    </div>
  )
}
