import Expense from "./Expense"

const ExpenseList = ({ expenses, setExpense2Edit, deleteExpense }) => {
  return (
    <div className="contenedor listado-gastos">
      <h2>{expenses.length > 0 ? 'Gastos' : 'No Expenses Yet'}</h2>
      
      {
        expenses.map((exp) => (
          <Expense 
            key={exp.id}
            exp={exp}
            setExpense2Edit={setExpense2Edit}
            deleteExpense={deleteExpense}
          />
        ))
      }
    </div>
  )
}

export default ExpenseList
