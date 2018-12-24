import React from 'react'
import Style from '../style'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 80px;
  border-top: 1px solid ${Style.colors.gray};
  border-bottom: 1px solid ${Style.colors.gray};
`

const VericalAlignCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Footer = () => (
  <StyledFooter>
    <VericalAlignCenter>
      <p>&#169; AUTO1 Group {new Date().getFullYear()}</p>
    </VericalAlignCenter>
  </StyledFooter>
)

export default Footer
