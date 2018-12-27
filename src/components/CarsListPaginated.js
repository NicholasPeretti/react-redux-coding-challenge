import React from 'react'
import PropTypes from 'prop-types'
import CarPropType from '../utils/propTypes/car'
import styled from 'styled-components'
import CarsList from './CarsList'
import SubTitleBold from './SubTitleBold'
import SubTitle from './SubTitle'
import Style from '../style'

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Row = styled.div`
display: flex;
flex-direction: row;
width: 100%
`

const Column = styled.div`
display: flex;
flex-direction: column;
width: 100%
`

class CarsListPaginated extends React.Component {
  componentDidMount () {
    this.props.fetchPage()
  }

  render () {
    const { cars, fetching, resultsCount } = this.props

    if (fetching) {
      return (<h3>Loading...</h3>)
    }

    return (
      <ListContainer>
        <Row>
          <Column>
            <SubTitleBold>
              Available cars
            </SubTitleBold>
            <SubTitle style={{ margin: `${Style.spacing.padding3} 0px` }}>
              Showing {cars.length} of {resultsCount} results
            </SubTitle>
          </Column>
        </Row>
        <CarsList cars={cars}/>
      </ListContainer>
    )
  }
}

CarsListPaginated.propTypes = {
  cars: PropTypes.arrayOf(CarPropType).isRequired,
  resultsCount: PropTypes.number.isRequired,
  fetchPage: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired
}

export default CarsListPaginated
