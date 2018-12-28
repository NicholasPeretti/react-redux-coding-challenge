import React from 'react'
import styled from 'styled-components'
import NotFoundMessage from '../components/NotFoundMessage'

const MessageContainer = styled.div`
  margin-top: 200px;
`

const PageNotFound = () => (
  <MessageContainer>
    <NotFoundMessage/>
  </MessageContainer>
)

export default PageNotFound
