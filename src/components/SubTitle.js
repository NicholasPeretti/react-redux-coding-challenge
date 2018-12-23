import React from 'react'

const _style = {
  margin: '0px',
  fontSize: '18px',
  fontWeight: 'normal'
}

const SubTitle = ({ children, style = {} }) => {
  const componentStyle = Object.assign({}, _style, style)

  return (
    <h3 style={componentStyle}>
      {children}
    </h3>
  )
}

export default SubTitle
