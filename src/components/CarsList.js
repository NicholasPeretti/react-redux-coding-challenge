import React from 'react'
import PropTypes from 'prop-types'
import CarsListItem from './CarsListItem'
import styled from 'styled-components'
import CarPropType from '../utils/propTypes/car'

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
    CarPropType
  ).isRequired
}

export default CarsList
