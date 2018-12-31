import React from 'react'
import PropTypes from 'prop-types'
import CarPropType from '../utils/propTypes/car'
import styled from 'styled-components'
import Style from '../style'
import Title from './Title'
import CarTitle from './CarTitle'
import CarShortDescription from './CarShortDescription'
import Text from './Text'
import SubTitle from './SubTitle'
import Button from './Button'
import BorderedBox from './BorderedBox'
import Skeleton from 'react-loading-skeleton'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  width: 800px;
  display: flex;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

const RowReverse = styled.div`
  display: flex;
  flex-direction: row-reverse;
`

const Space = styled.div`
  width: 100%;
  height: ${Style.spacing.padding3};
`

const CarDetailsPage = ({
  car,
  saveCar,
  unsaveCar,
  isCarSaved,
  fetching = false
}) => (
  <Wrapper>
    <Container>
      <Column style={{ width: '60%' }}>
        <Column>
          <Title>{fetching ? <Skeleton /> : <CarTitle {...car} />}</Title>
          <Space />
          <SubTitle>
            {fetching ? <Skeleton /> : <CarShortDescription {...car} />}
          </SubTitle>
          <Space />
          {fetching ? (
            <div>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton width={30} />
            </div>
          ) : (
            <Text>
              This car is currently available and can be delivered as soon as
              tomorrow morning. Please be aware that delivery times shown in
              this page are not definitive and may change due to bad weather
              conditions.
            </Text>
          )}
        </Column>
      </Column>
      <Column style={{ width: '40%', marginLeft: Style.spacing.padding3 }}>
        <BorderedBox>
          <Column>
            {fetching ? (
              <div>
                <Skeleton />
                <Skeleton />
                <Skeleton width={30} />
              </div>
            ) : (
              <Text>
                If you like this car, click the button and save it in your
                collection of favourite items.
              </Text>
            )}
            <RowReverse>
              <Button
                onClick={isCarSaved ? unsaveCar : saveCar}
                fetching={fetching}
              >
                {isCarSaved ? 'Unsave' : 'Save'}
              </Button>
            </RowReverse>
          </Column>
        </BorderedBox>
      </Column>
    </Container>
  </Wrapper>
)

CarDetailsPage.propTypes = {
  car: CarPropType,
  saveCar: PropTypes.func.isRequired,
  unsaveCar: PropTypes.func.isRequired,
  isCarSaved: PropTypes.bool.isRequired,
  fetching: PropTypes.bool
}

export default CarDetailsPage
