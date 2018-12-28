import React from 'react'
import PropTypes from 'prop-types'
import CarPropType from '../utils/propTypes/car'
import styled from 'styled-components'
import CarsList from './CarsList'
import CarsListSortBox from './CarsListSortBox'
import PaginationNav from './PaginationNav'
import SubTitleBold from './SubTitleBold'
import SubTitle from './SubTitle'
import Style from '../style'

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

class CarsListPaginated extends React.Component {
  componentDidMount () {
    this.props.fetchPage()
  }

  render () {
    const {
      cars,
      fetching,
      resultsCount,
      fetchPage,
      page,
      hasNext,
      hasPrev,
      totalPages,
      setSort,
      mileageSort
    } = this.props

    if (fetching) {
      return <h3>Loading...</h3>
    }

    return (
      <Column>
        <Row>
          <Column>
            <SubTitleBold>Available cars</SubTitleBold>
            <SubTitle style={{ margin: `${Style.spacing.padding3} 0px` }}>
              Showing {cars.length} of {resultsCount} results
            </SubTitle>
          </Column>
          <Column style={{ width: '40%' }}>
            <CarsListSortBox
              setSort={setSort}
              value={mileageSort}
            />
          </Column>
        </Row>
        <CarsList cars={cars} />
        <PaginationNav
          page={page}
          totalPages={totalPages}
          hasNext={hasNext}
          hasPrev={hasPrev}
          fetchPage={fetchPage}
        />
      </Column>
    )
  }
}

CarsListPaginated.propTypes = {
  cars: PropTypes.arrayOf(CarPropType).isRequired,
  resultsCount: PropTypes.number.isRequired,
  fetchPage: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired,
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  hasNext: PropTypes.bool.isRequired,
  hasPrev: PropTypes.bool.isRequired,
  mileageSort: PropTypes.number,
  setSort: PropTypes.func.isRequired
}

export default CarsListPaginated
