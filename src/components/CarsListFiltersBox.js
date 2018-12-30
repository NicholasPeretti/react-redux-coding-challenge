import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Style from '../style'
import ManufacturersFilter from '../containers/ManufacturersFilter'
import FilterButton from '../containers/FilterButton'

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: ${Style.spacing.padding3};
`

class CarsListFiltersBox extends React.Component {
  constructor () {
    super()
    this.state = {
      manufacturerFilter: null
    }
  }

  setManufacturerFilter (manufacturerFilter) {
    this.setState({
      manufacturerFilter
    })
  }

  render () {
    return (
      <Column>
        <ManufacturersFilter onChange={this.setManufacturerFilter.bind(this)} />
        <ButtonContainer>
          <FilterButton filters={this.state}>Filter</FilterButton>
        </ButtonContainer>
      </Column>
    )
  }
}

CarsListFiltersBox.propTypes = {
  onClickFilter: PropTypes.func
}

export default CarsListFiltersBox
