import React from 'react'
import CarPropType from '../utils/propTypes/car'
import CarTitle from './CarTitle'
import CarShortDescription from './CarShortDescription'
import Text from './Text'
import Link from './Link'

import Style from '../style'
import styled from 'styled-components'

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: ${Style.spacing.padding2};
`

var CarsListItemDescription = ({ car }) => (
  <StyledSection>
    <CarTitle
      manufacturerName={car.manufacturerName}
      modelName={car.modelName}
    />
    <CarShortDescription {...car} />
    <Text>
      <Link to={`/${car.stockNumber}`}>View details</Link>
    </Text>
  </StyledSection>
)

CarsListItemDescription.propTypes = {
  car: CarPropType.isRequired
}

export default CarsListItemDescription
