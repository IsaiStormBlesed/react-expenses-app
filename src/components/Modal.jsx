import CloseModalBtn from '../img/cerrar.svg';

const Modal = ({ setModal, animateModal, setAnimateModal }) => {

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

      <form className={`formulario ${animateModal ? 'animar' : 'cerrar'}`}>
        <legend>New Expense</legend>
      </form>
    </div>
  )
}

export default Modal
