import React from 'react'
import PropTypes from 'prop-types'
import Style from '../style'
import styled from 'styled-components'

const StyledImage = styled.img`
  width: 100px;
  height: 80px;
  margin: ${Style.spacing.padding2};
`

var CarThumb = ({ url }) => (
  <StyledImage src={url} />
)

CarThumb.propTypes = {
  url: PropTypes.string.isRequired
}

export default CarThumb
