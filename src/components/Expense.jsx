import IconSavings from '../img/icono_ahorro.svg';
import IconHouse from '../img/icono_casa.svg'
import IconFood from '../img/icono_comida.svg'
import IconOther from '../img/icono_gastos.svg'
import IconLeisure from '../img/icono_ocio.svg'
import IconHealth from '../img/icono_salud.svg'
import IconSubs from '../img/icono_suscripciones.svg'

const Expense = ({ exp }) => {

  const iconDictionary = {
    savings: IconSavings,
    food: IconFood,
    house: IconHouse,
    health: IconHealth,
    leisure: IconLeisure,
    subscriptions: IconSubs,
    other: IconOther
  }
  
  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <img src={iconDictionary[exp.category]} alt="Icon" />
        <div className="descripcion-gasto">
          <p className="categoria">{exp.category}</p>
          <p className="nombre-gasto">{exp.expense}</p>
          <p className="fecha-gasto">
            <span>{exp.date}</span>
          </p>
        </div>
      </div>
      <p className="cantidad-gasto">${exp.amount}</p>
    </div>
  )
}

export default Expense
