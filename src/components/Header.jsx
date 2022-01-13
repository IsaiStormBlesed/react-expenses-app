import NewBudget from "./NewBudget"

const Header = ({ budget, setBudget, isValidBudget, setIsValidBudget }) => {
  return (
    <header>
      <h1>Expenses App</h1>

      {
        isValidBudget
        ?
        <h1>Budget is: {budget}</h1>
        :
        <NewBudget 
          budget={budget}
          setBudget={setBudget}
          setIsValidBudget={setIsValidBudget}
        />
      }
      
    </header>
  )
}

export default Header
