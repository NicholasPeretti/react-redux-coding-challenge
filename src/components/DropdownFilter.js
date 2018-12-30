import React from 'react'
import PropTypes from 'prop-types'
import Style from '../style'
import styled from 'styled-components'
import Dropdown from './Dropdown'
import Text from './Text'

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled(Text)`
  margin-bottom: ${Style.spacing.padding1};
`

class DropdownFilter extends React.Component {
  constructor (props) {
    super(props)

    const { initialFetch } = props
    if (initialFetch) {
      initialFetch()
    }
  }

  render () {
    const { label, value, items, onChange } = this.props

    return (
      <FilterContainer>
        <Label>{label}</Label>
        <Dropdown
          value={value}
          items={items}
          onChange={onChange}
        />
      </FilterContainer>
    )
  }
}

DropdownFilter.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.string
  ),
  onChange: PropTypes.func,
  initialFetch: PropTypes.func
}

export default DropdownFilter
