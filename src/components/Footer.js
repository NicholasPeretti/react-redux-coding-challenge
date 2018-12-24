import React from 'react'
import Text from './Text'
import Style from '../style'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 80px;
  border-top: 2px solid ${Style.colors.gray};
`

const VericalAlignCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Footer = () => (
  <StyledFooter>
    <VericalAlignCenter>
      <Text>&#169; AUTO1 Group {new Date().getFullYear()}</Text>
    </VericalAlignCenter>
  </StyledFooter>
)

export default Footer
