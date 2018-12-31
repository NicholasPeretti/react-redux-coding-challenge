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
import Skeleton from 'react-loading-skeleton'

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
      fetchPage,
      page,
      hasNext,
      hasPrev,
      totalPages,
      setSort,
      mileageSort
    } = this.props

    return (
      <Column>
        <Row>
          <Column>
            <SubTitleBold>Available cars</SubTitleBold>
            <SubTitle style={{ margin: `${Style.spacing.padding3} 0px` }}>
              {fetching ? (
                <Skeleton width={200}/>
              ) : (
                <span>
                  Showing 1 of {totalPages} page{totalPages > 1 && 's'}
                </span>
              )}
            </SubTitle>
          </Column>
          <Column style={{ width: '40%' }}>
            {!fetching && (
              <CarsListSortBox
                setSort={setSort}
                value={mileageSort}
              />
            )}
          </Column>
        </Row>
        <CarsList cars={cars} fetching={fetching}/>
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
