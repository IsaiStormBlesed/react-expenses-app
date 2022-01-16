import { useState } from 'react';
import Message from './Message';
import CloseModalBtn from '../img/cerrar.svg';

const Modal = ({ setModal, animateModal, setAnimateModal, saveExpense }) => {

  const [newExpense, setNewExpense] = useState({
    expense: '',
    amount: 0,
    category: ''
  })
  const [errorMsg, setErrorMsg] = useState('')

  const handleModalSubmit = (e) => {
    e.preventDefault()

    if (Object.values(newExpense).includes('')) {
      setErrorMsg('All fields are needed')
      setTimeout(() => {
        setErrorMsg('')
      }, 2000);
      return
    }

    saveExpense(newExpense)
  }

  const closeModal = () => {
    setAnimateModal(false)

    setTimeout(() => {
      setModal(false)
    }, 500);
  }
  
  return (
    <div className='modal'>
      <div className="cerrar-modal">
        <img 
          src={ CloseModalBtn } 
          alt="button to close modal" 
          onClick={closeModal}
        />
      </div>

      <form 
        className={`formulario ${animateModal ? 'animar' : 'cerrar'}`}
        onSubmit={handleModalSubmit}
      >
        <legend>New Expense</legend>

        {
          errorMsg
          &&
          <Message type='error'>
            {errorMsg}
          </Message>
        }

        <div className="campo">
          <label htmlFor="expense">Expense</label>
          <input 
            type="text" 
            placeholder='Enter your expense...' 
            id="expense" 
            value={newExpense.expense}
            onChange={(e) => setNewExpense({...newExpense, expense: e.target.value})}
          />
        </div>

        <div className="campo">
          <label htmlFor="amount">Amount</label>
          <input 
            type="number" 
            placeholder='Enter your expense amount...' 
            id="expense" 
            value={newExpense.amount}
            onChange={(e) => setNewExpense({...newExpense, amount: e.target.value})}
          />
        </div>

        <div className="campo">
          <label htmlFor="category">Category</label>
          <select 
            id="category"
            value={newExpense.category}
            onChange={(e) => setNewExpense({...newExpense, category: e.target.value})}
          >
            <option value="" disabled>-- Select --</option>
            <option value="savings">Savings</option>
            <option value="food">Food</option>
            <option value="house">House</option>
            <option value="health">Health</option>
            <option value="leisure">Leisure</option>
            <option value="subscriptions">Subscriptions</option>
            <option value="other">Other</option>
          </select>
        </div>

        <input type="submit" value="Add expense" />
      </form>
    </div>
  )
}

export default Modal
