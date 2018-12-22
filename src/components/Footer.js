import React, { Component } from 'react'
import StyleContext from '../styleContext'

class Navbar extends Component {
  render () {
    return (
      <StyleContext.Consumer>
        {context => (
          <footer
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              height: '80px',
              borderTop: `1px solid ${context.colors.gray}`,
              borderBottom: `1px solid ${context.colors.gray}`
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <p>&#169; AUTO1 Group {new Date().getFullYear()}</p>
            </div>
          </footer>
        )}
      </StyleContext.Consumer>
    )
  }
}

export default Navbar
