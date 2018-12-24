import React from 'react'
import PropTypes from 'prop-types'
import SubTitleBold from './SubTitleBold'

var CarTitle = ({ manufacturerName, modelName }) => (
  <SubTitleBold>
    {manufacturerName} {modelName}
  </SubTitleBold>
)

CarTitle.propTypes = {
  manufacturerName: PropTypes.string.isRequired,
  modelName: PropTypes.string.isRequired
}

export default CarTitle
