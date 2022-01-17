import Expense from "./Expense"

const ExpenseList = ({ expenses }) => {
  console.log(expenses)
  return (
    <div className="contenedor listado-gastos">
      <h2>{expenses.length > 0 ? 'Gastos' : 'No Expenses Yet'}</h2>
      
      {
        expenses.map((exp) => (
          <Expense 
            key={exp.id}
            exp={exp}
          />
        ))
      }
    </div>
  )
}

export default ExpenseList
