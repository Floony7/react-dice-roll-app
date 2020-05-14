import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

const DieStyles = styled.div`
  margin: 0 0.3rem;
  display: inline-block;
`

const Die = ({ roll }) => {
  return (
    <DieStyles>
      <FontAwesomeIcon icon={roll} color="purple" size="9x" />
    </DieStyles>
  )
}

export default Die
