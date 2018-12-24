import React from 'react'
import Style from '../style'
import styled from 'styled-components'

const StyledLi = styled.li`
  float: right;
  padding: ${Style.spacing.padding2};
`

var NavMenuItem = ({ children }) => (
  <StyledLi>
    {children}
  </StyledLi>
)

export default NavMenuItem
