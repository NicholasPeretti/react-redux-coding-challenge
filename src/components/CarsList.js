import React from 'react'
import PropTypes from 'prop-types'
import CarsListItem from './CarsListItem'
import styled from 'styled-components'

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

var CarsList = ({ cars }) => (
  <ListContainer>
    {cars.map((car, key) => <CarsListItem car={car} key={key}/>)}
  </ListContainer>
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
