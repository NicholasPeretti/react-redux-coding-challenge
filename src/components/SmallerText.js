import React from 'react'
import Text from './Text'

const style = {
  fontSize: '12px'
}

const SmallerText = ({ children }) => (
  <Text style={style}>
    {children}
  </Text>
)

export default SmallerText
