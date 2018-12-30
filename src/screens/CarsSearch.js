import React from 'react'
import styled from 'styled-components'
import Style from '../style'
import CarsListPaginated from '../containers/CarsListPaginated'
import CarsListFiltersBox from '../components/CarsListFiltersBox'
import BorderedBox from '../components/BorderedBox'

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

const FiltersBox = styled(BorderedBox)`
  margin: 0px ${Style.spacing.padding3} 0px 0px;
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
