import React from 'react'
import PropTypes from 'prop-types'

var CarTitle = ({ manufacturerName, modelName }) => (
  <React.Fragment>
    {manufacturerName} {modelName}
  </React.Fragment>
)

CarTitle.propTypes = {
  manufacturerName: PropTypes.string.isRequired,
  modelName: PropTypes.string.isRequired
}

export default CarTitle
