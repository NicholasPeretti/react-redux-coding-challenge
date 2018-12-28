import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Style from '../style'
import Dropdown from './Dropdown'
import Text from './Text'

const NONE = 'None'
const MILEAGE_ASC = 'Mileage - Ascending'
const MILEAGE_DESC = 'Mileage - Descending'

const Box = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledText = styled(Text)`
  margin-bottom: ${Style.spacing.padding1};
`

var CarsListSortBox = ({ setSort }) => {
  var listOptions = [
    NONE,
    MILEAGE_ASC,
    MILEAGE_DESC
  ]

  return (
    <Box>
      <StyledText>Sort by</StyledText>
      <Dropdown
        items={listOptions}
        onChange={(val) => {
          let sortValue = (val === NONE) ? null : val
          setSort(sortValue)
        }}
      />
    </Box>
  )
}

CarsListSortBox.propTypes = {
  setSort: PropTypes.func.isRequired
}

export default CarsListSortBox
