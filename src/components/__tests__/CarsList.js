import React from 'react'
import { shallow } from 'enzyme'
import CarsList from '../CarsList'
import PresentationalTest from '../../utils/tests/presentational'
import { MemoryRouter } from 'react-router-dom'

const WrappedCarsList = props => (
  <MemoryRouter>
    <CarsList {...props} />
  </MemoryRouter>
)

const props = {
  cars: [{
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
  }]
}

describe('CarsList', () => {
  PresentationalTest(WrappedCarsList, props)

  const wrapper = shallow(<WrappedCarsList {...props} />)

  it('Should match snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
