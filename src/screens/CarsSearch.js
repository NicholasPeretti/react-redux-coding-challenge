import React from 'react'
import styled from 'styled-components'
import CarsListPaginated from '../containers/CarsListPaginated'

const Row = styled.div`
  display: flex;
  flex-direction: row;
`

const CarsListContainer = styled.div`
  display: flex;
  width: 60%;
`

const FiltersContainer = styled.div`
  display: flex;
  width: 40%;
`

const CarsSearch = () => (
  <Row>
    <FiltersContainer/>
    <CarsListContainer>
      <CarsListPaginated />
    </CarsListContainer>
  </Row>
)

export default CarsSearch
