import { useState } from "react";
import Message from "./Message";

const NewBudget = ({ budget, setBudget, setIsValidBudget }) => {

  const [message, setMessage] = useState('')

  function handleBudget(e) {
    e.preventDefault()
    const numberBudgetType = Number(budget)

    if (!numberBudgetType || numberBudgetType < 0) {
      setMessage('Invalid budget...')
      return
    }

    setIsValidBudget(true)
  }

  return (
    <div className="contenedor contenedor-presupuesto sombra">
      <form 
        className="formulario"
        onSubmit={handleBudget}
      >
        <div className="campo">
          <label htmlFor="budget">
            Set your Budget
          </label>

          <input 
            className="nuevo-presupuesto"
            type="text" 
            id="budget"
            value={budget}
            onChange={(e) => {
              setBudget(e.target.value)
              setMessage('')
            }}
          />
        </div>

        <input type="submit" value="Add your budget" />

        { message && <Message type="error">{message}</Message> }
      </form>
    </div>
  )
}

export default NewBudget
