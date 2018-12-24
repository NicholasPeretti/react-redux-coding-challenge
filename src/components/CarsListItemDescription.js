import React from 'react'
import PropTypes from 'prop-types'
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
      <Link>View details</Link>
    </Text>
  </StyledSection>
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
