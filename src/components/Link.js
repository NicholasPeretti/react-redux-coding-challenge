import React from 'react'
import PropTypes from 'prop-types'
import Style from '../style'
import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

const StyledLink = styled(RouterLink)`
  color: ${Style.colors.accent};
  text-decoration: none;

  &:hover: {
    text-decoration: underline;
  }
`

var Link = ({ to, children }) => (
  <StyledLink to={to}>
    {children}
  </StyledLink>
)

Link.propTypes = {
  to: PropTypes.string.isRequired
}

export default Link
