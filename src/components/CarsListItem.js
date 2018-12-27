import React from 'react'
import PropTypes from 'prop-types'
import CarsListItemDescription from './CarsListItemDescription'
import CarThumb from './CarThumb'
import Style from '../style'
import styled from 'styled-components'

const StyledArticle = styled.article`
  border: 2px solid ${Style.colors.gray};
  display: flex;
  flexDirection: row;
  margin: ${Style.spacing.padding1} 0px;
`

var CarsListItem = ({ car = {} }) => (
  <StyledArticle>
    <CarThumb url={car.pictureUrl} />
    <CarsListItemDescription car={car}/>
  </StyledArticle>
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
