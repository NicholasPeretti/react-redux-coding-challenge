import React from 'react'
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

var CarsListItem = ({ car = {} }) => (
  <StyledArticle>
    <CarThumb url={car.pictureUrl} />
    <CarsListItemDescription car={car}/>
  </StyledArticle>
)

CarsListItem.propTypes = {
  car: CarPropType.isRequired
}

export default CarsListItem
