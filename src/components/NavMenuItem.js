import React from 'react'
import StyleContext from '../styleContext'

var NavMenuItem = ({ children }) => (
  <StyleContext.Consumer>
    {context =>
      <li
        style={{
          float: 'right',
          padding: context.spacing.padding2
        }}
      >
        {children}
      </li>
    }
  </StyleContext.Consumer>
)

export default NavMenuItem
