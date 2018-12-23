import React from 'react'
import PropTypes from 'prop-types'
import StyleContext from '../styleContext'
import CarsListItemDescription from './CarsListItemDescription'
import CarThumb from './CarThumb'

var CarsListItem = ({ car = {} }) => (
  <StyleContext.Consumer>
    {context => {
      const articleStyle = {
        border: `1px solid ${context.colors.gray}`,
        display: 'flex',
        flexDirection: 'row'
      }

      return (
        <article style={articleStyle}>
          <CarThumb url={car.pictureUrl} />
          <CarsListItemDescription car={car}/>
        </article>
      )
    }}
  </StyleContext.Consumer>
)

CarsListItem.propTypes = {
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

export default CarsListItem
