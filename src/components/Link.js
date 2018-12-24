import React from 'react'
import PropTypes from 'prop-types'
import StyleContext from '../styleContext'

var Link = ({ to, style, children }) => (
  <StyleContext.Consumer>
    {context => (
      <a
        href={to}
        style={{
          color: context.colors.accent,
          ...style
        }}
      >
        {children}
      </a>
    )}
  </StyleContext.Consumer>
)

Link.propTypes = {
  to: PropTypes.string,
  style: PropTypes.object
}

export default Link
