import React from 'react'
import { shallow } from 'enzyme'
import CarsListItem from '../CarsListItem'
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

describe('CarsListItem', () => {
  PresentationalTest(CarsListItem, props)

  const wrapper = shallow(<CarsListItem {...props} />)

  it('Should match snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
