import React from 'react'
import PropTypes from 'prop-types'
import StyleContext from '../styleContext'

var CarThumb = ({ url }) => (
  <StyleContext.Consumer>
    {context => {
      const style = {
        width: '100px',
        height: '80px',
        margin: context.spacing.padding2
      }
      return (
        <img src={url} style={style} />
      )
    }}
  </StyleContext.Consumer>
)

CarThumb.propTypes = {
  url: PropTypes.string.isRequired
}

export default CarThumb
