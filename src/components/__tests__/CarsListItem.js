import React from 'react'
import { shallow } from 'enzyme'
import CarsListItem from '../CarsListItem'
import PresentationalTest from '../../utils/tests/presentational'
import { MemoryRouter } from 'react-router-dom'

const WrappedCarsListItem = props => (
  <MemoryRouter>
    <CarsListItem {...props} />
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

describe('CarsListItem', () => {
  PresentationalTest(WrappedCarsListItem, props)

  const wrapper = shallow(<WrappedCarsListItem {...props} />)

  it('Should match snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
