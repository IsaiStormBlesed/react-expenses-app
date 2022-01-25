import { useEffect, useState } from 'react'
import Header from './components/Header'
import ExpenseList from './components/ExpenseList'
import Modal from './components/Modal'
import randomId from './helpers/randomId'
import formatDate from './helpers/formatDate'
import IconNewExpense from './img/nuevo-gasto.svg'
import Filter from './components/Filter'

function App() {
  const [budget, setBudget] = useState(
    Number(localStorage.getItem('budget'))
  )
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)
  const [expenses, setExpenses] = useState(
    localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : []
  )
  const [expense2Edit, setExpense2Edit] = useState({})
  const [filter, setFilter] = useState('');
  const [expensesFiltered, setExpensesFiltered] = useState([]);
  
  useEffect(() => {
    const localStorageBudget = Number(localStorage.getItem('budget'))
    if (localStorageBudget > 0) {
      setIsValidBudget(true)
    }
  }, []);

  useEffect(() => {
    if (Object.keys(expense2Edit).length > 0) {
      setModal(true)
      setTimeout(() => {
        setAnimateModal(true)
      }, 500);
    }
  }, [expense2Edit]);

  useEffect(() => {
    localStorage.setItem('budget', budget ?? 0)
  }, [budget]);
  
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses) ?? [])
  }, [expenses]);

  useEffect(() => {
    if(filter) {
      const filteredExpenses = expenses.filter((exp) => exp.category === filter)
      setExpensesFiltered(filteredExpenses)
    }
  }, [filter]);
  
  
  

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
        setExpenses={setExpenses}
      />

      {
        isValidBudget
        &&
        <>
          <main>
            <Filter 
              filter={filter}
              setFilter={setFilter}
            />
            <ExpenseList 
              expenses={expenses}
              setExpense2Edit={setExpense2Edit}
              deleteExpense={deleteExpense}
              filter={filter}
              expensesFiltered={expensesFiltered}
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
