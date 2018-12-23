import React from 'react'
import SubTitle from './SubTitle'

const SubTitleBold = ({ children, style = {} }) => (
  <SubTitle
    style={{
      fontWeight: 'bold',
      ...style
    }}
  >
    {children}
  </SubTitle>
)

export default SubTitleBold
