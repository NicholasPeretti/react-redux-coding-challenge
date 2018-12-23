import React from 'react'
import { shallow } from 'enzyme'
import CarsListItemDescription from '../CarsListItemDescription'
import PresentationalTest from '../../utils/tests/presentational'

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
  PresentationalTest(CarsListItemDescription, props)

  const wrapper = shallow(<CarsListItemDescription {...props} />)

  test('Should match snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
