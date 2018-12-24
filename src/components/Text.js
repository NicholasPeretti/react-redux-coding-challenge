import React from 'react'
import styled from 'styled-components'

const StyledSpan = styled.span`
  font-size: 14px;
  font-weight: normal;
  margin: 0px;
`

const Text = ({ children, style = {} }) => (
  <StyledSpan style={style}>
    {children}
  </StyledSpan>
)

export default Text
