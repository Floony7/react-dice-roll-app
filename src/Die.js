import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import "./App.css"

const DieStyles = styled.div`
  margin: 0 1rem;
  display: inline-block;
`

const Die = ({ roll, isRolling }) => {
  return (
    <DieStyles className={isRolling && "wobble"}>
      <FontAwesomeIcon icon={roll} color="purple" size="9x" />
    </DieStyles>
  )
}

export default Die
