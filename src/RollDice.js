import React, { useState } from "react"
import Die from "./Die"
import { faDiceFour, faDiceFive, faDiceSix, faDiceOne, faDiceThree, faDiceTwo } from "@fortawesome/free-solid-svg-icons"
import { DieWrap, DiceContainer } from "./DiceStyles"
import styled from "styled-components"

const Button = styled.button`
  display: block;
  width: 17rem;
  padding: 0.5rem;
  margin-top: 1rem;
  border: none;
  background-color: green;
  color: #fff;
  font-size: 1.5rem;
  transition: all 0.4s ease-in-out;
  align-self: center;

  &:hover {
    background-color: teal;
    border: none;
  }

  &:active {
    border: none;
  }
`

const numbersInWords = [faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix]

const RollDice = (props) => {
  const [roll, setRoll] = useState(faDiceOne)
  const [roll2, setRoll2] = useState(faDiceThree)
  const [isRolling, setIsRolling] = useState(false)

  const rollDice = () => {
    const randomNum = Math.floor(Math.random() * 6)
    const randomNum2 = Math.floor(Math.random() * 6)
    const selectedNum = numbersInWords[randomNum]
    const selectedNum2 = numbersInWords[randomNum2]
    setIsRolling(true)
    // Set isRolling to false after 2 seconds
    setTimeout(() => {
      setRoll(selectedNum)
      setRoll2(selectedNum2)
      setIsRolling(false)
    }, 1000)
  }
  return (
    <DieWrap>
      <DiceContainer>
        <Die roll={roll} isRolling={isRolling} />
        <Die roll={roll2} isRolling={isRolling} />
      </DiceContainer>
      <Button onClick={rollDice} disabled={isRolling}>
        {isRolling ? "Rolling..." : "Roll Dice"}
      </Button>
    </DieWrap>
  )
}

export default RollDice
