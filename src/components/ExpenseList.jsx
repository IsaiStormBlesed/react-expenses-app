import Expense from "./Expense"

const ExpenseList = ({ expenses, setExpense2Edit, deleteExpense, filter, expensesFiltered }) => {
  return (
    <div className="contenedor listado-gastos">
      
      { 
        filter == 'all' || filter == '' 
        ?
          <>
            <h2>{expenses.length > 0 ? 'Expense' : 'No Expenses Yet'}</h2>
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
          </>
        :
          <>
            <h2>{expensesFiltered.length > 0 ? 'Expenses' : 'No expenses in this category'}</h2>
            {
              expensesFiltered.map((exp) => (
                <Expense 
                  key={exp.id}
                  exp={exp}
                  setExpense2Edit={setExpense2Edit}
                  deleteExpense={deleteExpense}
                />
              ))
            }
          </>
      }
    </div>
  )
}

export default ExpenseList
