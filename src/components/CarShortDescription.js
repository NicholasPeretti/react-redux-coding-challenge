import React from 'react'
import PropTypes from 'prop-types'

var CarShortDescription = ({ stockNumber, mileage = {}, color, fuelType }) => (
  <p>
    Stock # {stockNumber} - {mileage.number} {mileage.unit} - {fuelType} - {color}
  </p>
)

CarShortDescription.propTypes = {
  stockNumber: PropTypes.number.isRequired,
  mileage: PropTypes.shape({
    number: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired
  }).isRequired,
  color: PropTypes.string.isRequired,
  fuelType: PropTypes.string.isRequired
}

export default CarShortDescription
