import React from 'react'
import PropTypes from 'prop-types'

var Link = ({ to, style, children }) => (
  <a href={to} style={{ ...style }}>
    {children}
  </a>
)

Link.propTypes = {
  to: PropTypes.string,
  style: PropTypes.object
}

export default Link
