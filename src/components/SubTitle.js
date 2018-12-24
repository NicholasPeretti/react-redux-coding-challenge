import React from 'react'
import styled from 'styled-components'

const StyledH3 = styled.h3`
  margin: 0px;
  font-size: 18px;
  font-weight: normal;
`

const SubTitle = ({ children, style = {} }) => (
  <StyledH3 style={style}>
    {children}
  </StyledH3>
)

export default SubTitle
