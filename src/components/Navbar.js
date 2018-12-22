import React, { Component } from 'react'
import StyleContext from '../styleContext'
import NavLogo from './NavLogo'
import NavMenu from './NavMenu'
import NavMenuItem from './NavMenuItem'

class Navbar extends Component {
  render () {
    return (
      <StyleContext.Consumer>
        {context => (
          <header>
            <nav
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: '80px',
                borderBottom: `1px solid ${context.colors.gray}`,
                padding: `0px ${context.spacing.padding3}`
              }}
            >
              <NavLogo />
              <NavMenu>
                <NavMenuItem>Purchase</NavMenuItem>
                <NavMenuItem>My Orders</NavMenuItem>
                <NavMenuItem>Sell</NavMenuItem>
              </NavMenu>
            </nav>
          </header>
        )}
      </StyleContext.Consumer>
    )
  }
}

export default Navbar
