import React from 'react'
import Style from '../style'
import styled from 'styled-components'
import Text from './Text'
import Skeleton from 'react-loading-skeleton'

const StyledButton = styled.button`
  background: ${Style.colors.accent};
  width: 128px;
  height: 32px;
  border: 2px solid ${Style.colors.accent};
  border-radius: 3px;
  color: white;
  cursor: pointer;

  &:active {
    background: ${Style.colors.accentPressed};
  }
`

const Button = ({ children, onClick, fetching = false }) => {
  if (fetching) return <Skeleton width={128} height={32} />
  return (
    <StyledButton onClick={onClick}>
      <Text>{children}</Text>
    </StyledButton>
  )
}

export default Button
