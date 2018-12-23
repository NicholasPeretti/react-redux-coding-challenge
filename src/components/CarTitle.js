import React from 'react'
import PropTypes from 'prop-types'

var CarTitle = ({ manufacturerName, modelName }) => (
  <h3 style={{ margin: '0px' }}>
    {manufacturerName} {modelName}
  </h3>
)

CarTitle.propTypes = {
  manufacturerName: PropTypes.string.isRequired,
  modelName: PropTypes.string.isRequired
}

export default CarTitle
