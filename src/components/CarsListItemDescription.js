import React from 'react'
import PropTypes from 'prop-types'
import CarPropType from '../utils/propTypes/car'
import CarTitle from './CarTitle'
import CarShortDescription from './CarShortDescription'
import Text from './Text'
import Link from './Link'
import SubTitleBold from './SubTitleBold'
import Skeleton from 'react-loading-skeleton'

import Style from '../style'
import styled from 'styled-components'

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: ${Style.spacing.padding2};
`

var CarsListItemDescription = ({ car, fetching = false }) => (
  <StyledSection>
    <SubTitleBold>
      {fetching ? (
        <Skeleton width={200} />
      ) : (
        <CarTitle {...car}/>
      )}
    </SubTitleBold>
    <Text>
      {fetching ? (
        <Skeleton width={200} />
      ) : (
        <CarShortDescription {...car} />
      )}
    </Text>
    <Text>
      {fetching ? (
        <Skeleton width={50} />
      ) : (
        <Link to={`/${car.stockNumber}`}>View details</Link>
      )}
    </Text>
  </StyledSection>
)

CarsListItemDescription.propTypes = {
  car: CarPropType.isRequired,
  fetching: PropTypes.bool
}

export default CarsListItemDescription
