import React from 'react'
import PropTypes from 'prop-types'
import Text from './Text'
import Style from '../style'
import styled from 'styled-components'

const DropdownContainer = styled.div`
  min-width: 128px;
  height: 32px;
`

const DropdownButton = styled.button`
  border: 2px solid ${Style.colors.gray};
  border-radius: 3px;
  background: white;
  height: 32px;
  min-width: 128px;
  width: 100%;
  text-align: left;
  cursor: pointer;
`

const DropdownButtonArrowContainer = styled.span`
  float: right;
  color: ${Style.colors.gray}
`

const DropdownListContainer = styled.div`
  width:100%;
`

const DropdownList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  border-radius: 3px;
  margin: 8px 0px;
  padding: 0px;
  min-width: 128px;

  li {
    cursor: pointer;
    background: white;
    padding: 8px;
    border: 2px solid ${Style.colors.gray};
    border-bottom: 0px;
    z-index: 2;

    &:hover {
      color: white;
      background: ${Style.colors.accent};
    }
  }

  li:last-child {
    border-radius: 0px 0px 3px 3px;
    border-bottom: 2px solid ${Style.colors.gray};
  }

  li:first-child {
    border-radius: 3px 3px 0px 0px;
  }
`

const DropdownItem = ({ item, onClick }) => (
  <li onClick={onClick} value={item}>
    <Text>{item}</Text>
  </li>
)

class Dropdown extends React.Component {
  state = {
    showList: false,
    value: null
  }

  static getDerivedStateFromProps (props, state) {
    const { items } = props

    if (state.value) return null

    return Object.assign({}, state, {
      value: items[0]
    })
  }

  toggleList () {
    this.setState({
      showList: !this.state.showList
    })
  }

  onSelectItem (e) {
    const value = e.target.closest('li').getAttribute('value')
    this.setState({ value, showList: false }, () => {
      this.triggerOnChange()
    })
  }

  triggerOnChange () {
    if (this.props.onChange) {
      this.props.onChange(
        this.state.value
      )
    }
  }

  render() {
    const { items, style } = this.props

    return (
      <DropdownContainer style={style}>
        <DropdownButton onClick={this.toggleList.bind(this)}>
          <Text>
            {this.state.value}
          </Text>
          <DropdownButtonArrowContainer>
            {this.state.showList ? <span>&#9650;</span> : <span>&#9660;</span>}
          </DropdownButtonArrowContainer>
        </DropdownButton>
        {this.state.showList && (
          <DropdownListContainer>
            <DropdownList>
              {items.map((item, key) =>
                <DropdownItem
                  item={item}
                  key={key}
                  onClick={this.onSelectItem.bind(this)}
                />
              )}
            </DropdownList>
          </DropdownListContainer>
        )}
      </DropdownContainer>
    )
  }
}

Dropdown.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func
}

export default Dropdown
