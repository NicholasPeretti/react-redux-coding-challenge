import React from 'react'
import { shallow } from 'enzyme'
import PresentationalTest from '../../utils/tests/presentational'
import CarShortDescription from '../CarShortDescription'
const props = {
  stockNumber: 12345,
  mileage: {
    number: 123,
    unit: 'km'
  },
  color: 'white',
  fuelType: 'diesel'
}

describe('CarShortDescription', () => {
  PresentationalTest(CarShortDescription, props)

  const wrapper = shallow(<CarShortDescription {...props}/>)

  test('Should match snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
