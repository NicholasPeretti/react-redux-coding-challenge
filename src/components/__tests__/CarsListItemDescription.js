import React from 'react'
import { shallow } from 'enzyme'
import CarsListItemDescription from '../CarsListItemDescription'
import PresentationalTest from '../../utils/tests/presentational'
import { MemoryRouter } from 'react-router-dom'

const WrappedCarsListItemDescription = props => (
  <MemoryRouter>
    <CarsListItemDescription {...props} />
  </MemoryRouter>
)

const props = {
  car: {
    stockNumber: 86987,
    manufacturerName: 'Fiat',
    modelName: 'Talento',
    color: 'white',
    mileage: {
      number: 102586,
      unit: 'km'
    },
    fuelType: 'Petrol',
    pictureUrl: 'http://localhost:3001/car.svg'
  }
}

describe('CarsListItemDescription', () => {
  PresentationalTest(WrappedCarsListItemDescription, props)

  const wrapper = shallow(<WrappedCarsListItemDescription {...props} />)

  test('Should match snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
