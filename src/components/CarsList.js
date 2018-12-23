import React from 'react'
import PropTypes from 'prop-types'
import CarsListItem from './CarsListItem'

const style = {
  display: 'flex',
  flexDirection: 'column'
}

var CarsList = ({ cars }) => (
  <div style={style}>
    {cars.map((car, key) => <CarsListItem car={car} key={key}/>)}
  </div>
)

CarsList.propTypes = {
  cars: PropTypes.arrayOf(
    PropTypes.shape({
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
  )
}

export default CarsList
