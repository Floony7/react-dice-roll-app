import React from "react"
// import "./App.css"
import RollDice from "./RollDice"

function App() {
  /* const [roll, setRoll] = useState(faDiceOne)
  const [roll2, setRoll2] = useState(faDiceThree)

  const rollDice = () => {
    const randomNum = Math.floor(Math.random() * 6)
    const randomNum2 = Math.floor(Math.random() * 6)
    const selectedNum = numbersInWords[randomNum]
    const selectedNum2 = numbersInWords[randomNum2]
    setRoll(selectedNum)
    setRoll2(selectedNum2) 
  } */
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <RollDice />
        </h1>
      </header>
    </div>
  )
}

export default App
