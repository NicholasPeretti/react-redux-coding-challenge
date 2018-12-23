import React from 'react'
import PropTypes from 'prop-types'
import CarTitle from './CarTitle'
import CarShortDescription from './CarShortDescription'
import StyleContext from '../styleContext'

var CarsListItemDescription = ({ car }) => (
  <StyleContext.Consumer>
    {context => {
      const style = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        fontSize: '14px',
        margin: context.spacing.padding2
      }
      return (
        <section style={style}>
          <CarTitle
            manufacturerName={car.manufacturerName}
            modelName={car.modelName}
          />
          <CarShortDescription {...car} />
          <a href='#'>View details</a>
        </section>
      )
    }}
  </StyleContext.Consumer>
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
