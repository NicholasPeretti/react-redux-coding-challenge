import React from 'react'
import PropTypes from 'prop-types'
import Style from '../style'
import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'

const StyledImage = styled.img`
  width: 100px;
  height: 80px;
  margin: ${Style.spacing.padding2};
`

const SkeletonContainer = styled.div`
  width: 100px;
  height: 80px;
  margin: ${Style.spacing.padding2};
`

var CarThumb = ({ url, fetching = false }) => {
  if (fetching) {
    return (
      <SkeletonContainer>
        <Skeleton height={80}/>
      </SkeletonContainer>
    )
  }
  return <StyledImage src={url} />
}

CarThumb.propTypes = {
  url: PropTypes.string.isRequired,
  fetching: PropTypes.bool
}

export default CarThumb
