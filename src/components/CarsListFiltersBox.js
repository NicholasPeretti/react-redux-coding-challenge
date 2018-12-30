import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Style from '../style'
import ManufacturersFilter from '../containers/ManufacturersFilter'
import ColorsFilter from '../containers/ColorsFilter'
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

const Space = styled.div`
  display: flex;
  height: ${Style.spacing.padding2};
  width: 100%;
`

class CarsListFiltersBox extends React.Component {
  constructor () {
    super()
    this.state = {
      manufacturerFilter: null,
      colorFilter: null
    }
  }

  setManufacturerFilter (manufacturerFilter) {
    this.setState({
      manufacturerFilter
    })
  }

  setColorFilter (colorFilter) {
    this.setState({
      colorFilter
    })
  }

  render () {
    return (
      <Column>
        <ColorsFilter onChange={this.setColorFilter.bind(this)} />
        <Space />
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
