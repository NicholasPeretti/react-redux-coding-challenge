import React from 'react'
import logo from '../logo.png'
import Style from '../style'
import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`
const StyledImage = styled.img`
  max-height: 30px;
  margin: ${Style.spacing.padding3} 0px;
`

const NavLogo = () => (
  <StyledContainer>
    <StyledImage src={logo} alt="Auto1" />
  </StyledContainer>
)

export default NavLogo
