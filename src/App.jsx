import { useEffect, useState } from 'react'
import Header from './components/Header'
import ExpenseList from './components/ExpenseList'
import Modal from './components/Modal'
import randomId from './helpers/randomId'
import formatDate from './helpers/formatDate'
import IconNewExpense from './img/nuevo-gasto.svg'

function App() {
  const [budget, setBudget] = useState(0)
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)
  const [expenses, setExpenses] = useState([])
  const [expense2Edit, setExpense2Edit] = useState({})

  useEffect(() => {
    if (Object.keys(expense2Edit).length > 0) {
      setModal(true)
      setTimeout(() => {
        setAnimateModal(true)
      }, 500);
    }
  }, [expense2Edit]);
  

  const handleNewExpense = () => {
    setModal(true)
    setExpense2Edit({})

    setTimeout(() => {
      setAnimateModal(true)
    }, 500);
  }

  const saveExpense = (expense) => {

    if (expense.id == undefined) {
      //New expense
      expense.id = randomId()
      expense.date = formatDate(Date.now())
      setExpenses([...expenses, expense])
    } 
    else {
      //Edit expenses
      const expensesUpdated = expenses.map((expenseInState) => {
        return expenseInState.id == expense.id ? expense : expenseInState;
      })
      setExpenses(expensesUpdated)
    }

    setAnimateModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500);
  }

  const deleteExpense = (id) => {
    const expensesUpdatedAfterDeletion = expenses.filter((exp) => exp.id != id)
    setExpenses(expensesUpdatedAfterDeletion)
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header 
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
        expenses={expenses}
      />

      {
        isValidBudget
        &&
        <>
          <main>
            <ExpenseList 
              expenses={expenses}
              setExpense2Edit={setExpense2Edit}
              deleteExpense={deleteExpense}
            />
          </main>
          <div className="nuevo-gasto">
            <img 
              src={IconNewExpense} 
              alt="new expense icon" 
              onClick={handleNewExpense}
            />
          </div>
        </>
      }

      {
        modal
        &&
        <Modal 
          setModal={setModal}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
          saveExpense={saveExpense}
          expense2Edit={expense2Edit}
          setExpense2Edit={setExpense2Edit}
        />
      }
    </div>
  )
}

export default App
