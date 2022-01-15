import { useState } from 'react'
import Header from './components/Header'
import IconNewExpense from './img/nuevo-gasto.svg'

function App() {
  const [budget, setBudget] = useState(0)
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [modal, setModal] = useState(false)

  const handleNewExpense = () => {
    setModal(true)
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
        <div className="nuevo-gasto">
          <img 
            src={IconNewExpense} 
            alt="new expense icon" 
            onClick={handleNewExpense}
          />
        </div>
      }

      {
        modal
        &&
        <p>Modal here...</p>
      }
    </div>
  )
}

export default App
