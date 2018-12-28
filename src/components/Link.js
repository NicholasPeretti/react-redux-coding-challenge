import React from 'react'
import PropTypes from 'prop-types'
import LinkStyle from '../utils/styledComponents/link-style'
import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

const StyledLink = styled(RouterLink)`
  ${LinkStyle};
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
