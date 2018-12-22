import React from 'react'
import StyleContext from '../styleContext'
import logo from '../logo.png'

var NavLogo = () => (
  <StyleContext.Consumer>
    {context => (
      <img
        src={logo}
        alt="Auto1"
        style={{
          maxHeight: '30px',
          margin: `${context.spacing.padding3} 0px`
        }}
      />
    )}
  </StyleContext.Consumer>
)

export default NavLogo
