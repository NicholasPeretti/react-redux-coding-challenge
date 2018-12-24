import React from 'react'
import StyleContext from '../styleContext'
import logo from '../logo.png'

var NavLogo = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center'
    }}
  >
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
  </div>
)

export default NavLogo
