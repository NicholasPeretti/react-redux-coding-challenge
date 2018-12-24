import React from 'react'
import NavLogo from './NavLogo'
import Title from './Title'
import SubTitle from './SubTitle'
import Link from './Link'
import Style from '../style'
import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`

const StyledSubTitle = styled(SubTitle)`
  margin: ${Style.spacing.padding3} 0px;
`

const NotFoundMessage = () => (
  <StyledContainer>
    <NavLogo/>
    <Title>404 - Not Found</Title>
    <StyledSubTitle>
        Sorry, the page you are looking for does not exist.
    </StyledSubTitle>
    <SubTitle>You can always go back to the <Link>homepage</Link>.</SubTitle>
  </StyledContainer>
)

export default NotFoundMessage
