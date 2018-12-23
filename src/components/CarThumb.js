import React from 'react'
import PropTypes from 'prop-types'

const style = {
  width: '40px',
  height: '30px'
}

var CarThumb = ({ url }) => (
  <img src={url} style={style} />
)

CarThumb.propTypes = {
  url: PropTypes.string.isRequired
}

export default CarThumb
