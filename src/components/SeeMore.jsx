import React from "react"
import styled from "styled-components"
import { SIZES, COLORS } from "../constants"
import eyeImage from "../assets/eye.png"
import { Link } from "react-router-dom"

const SeeMoreStyled = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-decoration: none;
  gap: 10px;
  font-size: ${SIZES.xs};
  color: ${COLORS.main};
`

const SeeMore = ({ to }) => {
  return (
    <SeeMoreStyled to={to}>
      <img src={eyeImage} alt="see more" />
      <span style={{ color: COLORS.main }}>Ver más...</span>
    </SeeMoreStyled>
  )
}

export default SeeMore
