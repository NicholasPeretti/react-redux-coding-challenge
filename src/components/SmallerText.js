import React from 'react'
import Text from './Text'

const SmallerText = ({ children, style = {} }) => (
  <Text
    style={{
      fontSize: '12px',
      ...style
    }}
  >
    {children}
  </Text>
)

export default SmallerText
