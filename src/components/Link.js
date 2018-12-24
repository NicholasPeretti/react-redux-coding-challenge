import React from 'react'
import PropTypes from 'prop-types'
import Style from '../style'
import styled from 'styled-components'

const StyledLink = styled.a`
  color: ${Style.colors.accent};
  text-decoration: none;

  &:hover: {
    text-decoration: underline;
  }
`

var Link = ({ to, children }) => (
  <StyledLink href={to}>
    {children}
  </StyledLink>
)

Link.propTypes = {
  to: PropTypes.string,
  style: PropTypes.object
}

export default Link
