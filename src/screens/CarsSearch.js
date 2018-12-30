import React from 'react'
import styled from 'styled-components'
import Style from '../style'
import CarsListPaginated from '../containers/CarsListPaginated'
import CarsListFiltersBox from '../components/CarsListFiltersBox'

const Row = styled.div`
  display: flex;
  flex-direction: row;
`

const CarsListContainer = styled.div`
  display: flex;
  width: 60%;
`

const FiltersContainer = styled.div`
  display: block;
  width: 40%;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

const FiltersBox = styled.div`
  border: 2px solid ${Style.colors.gray};
  padding: ${Style.spacing.padding3};
  margin: 0px ${Style.spacing.padding3};
`

const CarsSearch = () => (
  <Row>
    <FiltersContainer>
      <Column>
        <FiltersBox>
          <CarsListFiltersBox onClickFilter={state => { console.log(state) }}/>
        </FiltersBox>
      </Column>
    </FiltersContainer>
    <CarsListContainer>
      <CarsListPaginated />
    </CarsListContainer>
  </Row>
)

export default CarsSearch
