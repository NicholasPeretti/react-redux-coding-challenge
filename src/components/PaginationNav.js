import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Text from './Text'
import Style from '../style'
import _StyledLink from './StyledLink'

const LABELS_SPACING = Style.spacing.padding2

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: ${Style.spacing.padding3} 0px;
`

const StyledLink = styled(_StyledLink)`
  margin: 0px ${LABELS_SPACING};
`

var PaginationNav = ({ page, hasNext, hasPrev, totalPages, fetchPage }) => (
  <NavContainer>
    <Text>
      <StyledLink onClick={() => fetchPage(1)}>First</StyledLink>

      <StyledLink
        onClick={() => {
          if (hasPrev) fetchPage(page - 1)
        }}
      >
        Previous
      </StyledLink>

      <span style={{ margin: `0px ${LABELS_SPACING}` }}>
        Page {page} of {totalPages}
      </span>

      <StyledLink
        onClick={() => {
          if (hasNext) fetchPage(page + 1)
        }}
      >
        Next
      </StyledLink>

      <StyledLink onClick={() => fetchPage(totalPages)}>Last</StyledLink>
    </Text>
  </NavContainer>
)

PaginationNav.propTypes = {
  page: PropTypes.number.isRequired,
  hasNext: PropTypes.bool.isRequired,
  hasPrev: PropTypes.bool.isRequired,
  totalPages: PropTypes.number.isRequired,
  fetchPage: PropTypes.func.isRequired
}

export default PaginationNav
