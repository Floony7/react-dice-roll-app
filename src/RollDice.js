import React, { useState } from "react"
import Die from "./Die"
import { faDiceFour, faDiceFive, faDiceSix, faDiceOne, faDiceThree, faDiceTwo } from "@fortawesome/free-solid-svg-icons"
import { DieWrap } from "./DieWrap"

const numbersInWords = [faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix]

const RollDice = (props) => {
  const [roll, setRoll] = useState(faDiceOne)
  const [roll2, setRoll2] = useState(faDiceThree)

  const rollDice = () => {
    const randomNum = Math.floor(Math.random() * 6)
    const randomNum2 = Math.floor(Math.random() * 6)
    const selectedNum = numbersInWords[randomNum]
    const selectedNum2 = numbersInWords[randomNum2]
    setRoll(selectedNum)
    setRoll2(selectedNum2)
  }
  return (
    <DieWrap>
      <Die roll={roll} />
      <Die roll={roll2} />
      <button onClick={rollDice}>Roll Dice</button>
    </DieWrap>
  )
}

export default RollDice
