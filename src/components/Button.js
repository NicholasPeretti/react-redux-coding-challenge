import React from 'react'
import Style from '../style'
import styled from 'styled-components'
import Text from './Text'

const StyledButton = styled.button`
  background: ${Style.colors.accent};
  width: 128px;
  height: 32px;
  border: 1px solid ${Style.colors.accent};
  border-radius: 3px;
  color: white;
  cursor: pointer;

  &:active {
    background: ${Style.colors.accentPressed};
  }
`

const Button = ({ children }) => (
  <StyledButton>
    <Text>{children}</Text>
  </StyledButton>
)

export default Button
