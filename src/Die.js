import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

const DieWrap = styled.div`
  width: 50vw;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: nowrap;
`

const Die = ({ roll }) => {
  return (
    <DieWrap>
      <FontAwesomeIcon icon={roll} color="slateblue" size="3x" />
    </DieWrap>
  )
}

export default Die
