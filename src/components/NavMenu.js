import React from 'react'

var NavMenu = ({ children }) => (
  <ul
    style={{
      display: 'flex',
      flexDirection: 'row',
      listStyleType: 'none'
    }}
  >
    {children}
  </ul>
)

export default NavMenu
