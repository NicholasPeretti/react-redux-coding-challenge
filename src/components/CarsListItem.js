import React from 'react'
import PropTypes from 'prop-types'
import CarsListItemDescription from './CarsListItemDescription'
import CarThumb from './CarThumb'
import Style from '../style'
import styled from 'styled-components'
import CarPropType from '../utils/propTypes/car'

const StyledArticle = styled.article`
  border: 2px solid ${Style.colors.gray};
  display: flex;
  flexDirection: row;
  margin: ${Style.spacing.padding1} 0px;
`

var CarsListItem = ({ car = {}, fetching = false }) => (
  <StyledArticle>
    <CarThumb url={car.pictureUrl} fetching={fetching} />
    <CarsListItemDescription car={car} fetching={fetching} />
  </StyledArticle>
)

CarsListItem.propTypes = {
  car: CarPropType.isRequired,
  fetching: PropTypes.bool
}

export default CarsListItem
