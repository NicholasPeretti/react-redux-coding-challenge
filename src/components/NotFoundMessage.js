import React from 'react'
import NavLogo from './NavLogo'
import Title from './Title'
import SubTitle from './SubTitle'
import Link from './Link'
import StyleContext from '../styleContext'

const style = {
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  flexDirection: 'column'
}

const NotFoundMessage = () => (
  <StyleContext.Consumer>
    {context => (
      <div style={style}>
        <NavLogo/>
        <Title>404 - Not Found</Title>
        <SubTitle
          style={{
            marginBottom: context.spacing.padding3,
            marginTop: context.spacing.padding3
          }}>
            Sorry, the page you are looking for does not exist.
        </SubTitle>
        <SubTitle>You can always go back to the <Link>homepage</Link>.</SubTitle>
      </div>
    )}
  </StyleContext.Consumer>
)

export default NotFoundMessage
