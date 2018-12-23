import React from 'react'

const _style = {
  fontSize: '14px',
  fontWeight: 'normal',
  margin: '0px'
}

const Text = ({ children, style = {} }) => {
  const componentStyle = Object.assign({}, _style, style)
  return <span style={componentStyle}>{children}</span>
}

export default Text
