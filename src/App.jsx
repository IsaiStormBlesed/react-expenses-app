import { useState } from 'react'
import Header from './components/Header'
import ExpenseList from './components/ExpenseList'
import Modal from './components/Modal'
import randomId from './helpers/randomId'
import IconNewExpense from './img/nuevo-gasto.svg'

function App() {
  const [budget, setBudget] = useState(0)
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)
  const [expenses, setExpenses] = useState([])

  const handleNewExpense = () => {
    setModal(true)

    setTimeout(() => {
      setAnimateModal(true)
    }, 500);
  }

  const saveExpense = (expense) => {
    expense.id = randomId()
    expense.date = Date.now()
    setExpenses([...expenses, expense])
    setAnimateModal(false)

    setTimeout(() => {
      setModal(false)
    }, 500);
  }

  return (
    <div>
      <Header 
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {
        isValidBudget
        &&
        <>
          <main>
            <ExpenseList expenses={expenses}/>
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
        />
      }
    </div>
  )
}

export default App
