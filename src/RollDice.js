import React, { useState } from "react"
import Die from "./Die"
import { faDiceFour, faDiceFive, faDiceSix, faDiceOne, faDiceThree, faDiceTwo } from "@fortawesome/free-solid-svg-icons"
import { DieWrap } from "./DieWrap"
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
  text-transform: uppercase;
  transition: all 0.4s ease-in-out;

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
      <Button onClick={rollDice}>Roll Dice</Button>
    </DieWrap>
  )
}

export default RollDice
