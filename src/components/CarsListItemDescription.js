import React from 'react'
import PropTypes from 'prop-types'
import CarShortDescription from './CarShortDescription'

const style = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
}

var CarsListItemDescription = ({ car }) => (
  <section style={style}>
    <h3>{car.manufacturerName} {car.modelName}</h3>
    <CarShortDescription {...car} />
    <a href='#'>View details</a>
  </section>
)

CarsListItemDescription.propTypes = {
  car: PropTypes.shape({
    stockNumber: PropTypes.number.isRequired,
    manufacturerName: PropTypes.string.isRequired,
    modelName: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    mileage: PropTypes.shape({
      number: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired
    }).isRequired,
    fuelType: PropTypes.string.isRequired,
    pictureUrl: PropTypes.string.isRequired
  }).isRequired
}

export default CarsListItemDescription
