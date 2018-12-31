import React from 'react'
import PropTypes from 'prop-types'
import CarsListItem from './CarsListItem'
import styled from 'styled-components'
import CarPropType from '../utils/propTypes/car'
import SubTitle from './Title'
import { CarsList as MOCK_CARS } from '../utils/tests/data'

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const Center = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`

var CarsList = ({ cars, fetching = false }) => {
  if (fetching) {
    cars = MOCK_CARS
  }

  if (!cars.length) {
    return (
      <Center>
        <SubTitle>No cars found</SubTitle>
      </Center>
    )
  }
  return (
    <ListContainer>
      {cars.map((car, key) => (
        <CarsListItem car={car} key={key} fetching={fetching} />
      ))}
    </ListContainer>
  )
}

CarsList.propTypes = {
  cars: PropTypes.arrayOf(CarPropType).isRequired,
  fetching: PropTypes.bool
}

export default CarsList
