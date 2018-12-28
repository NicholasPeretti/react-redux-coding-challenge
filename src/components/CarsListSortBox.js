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

var CarsListSortBox = ({ setSort, value }) => {
  var listOptions = [
    NONE,
    MILEAGE_ASC,
    MILEAGE_DESC
  ]

  var currentVal = NONE
  if (value === 1) currentVal = MILEAGE_ASC
  if (value === -1) currentVal = MILEAGE_DESC

  return (
    <Box>
      <StyledText>Sort by</StyledText>
      <Dropdown
        value={currentVal}
        items={listOptions}
        onChange={(val) => {
          let sortValue = null

          if (val === MILEAGE_ASC) sortValue = 1
          if (val === MILEAGE_DESC) sortValue = -1

          setSort(sortValue)
        }}
      />
    </Box>
  )
}

CarsListSortBox.propTypes = {
  setSort: PropTypes.func.isRequired,
  value: PropTypes.number
}

export default CarsListSortBox
