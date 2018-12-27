import React from 'react'
import CarsListPaginated from '../CarsListPaginated'
import PresentationalTest from '../../utils/tests/presentational'
import { shallow } from 'enzyme'
import { CarsList as MOCK_CARS } from '../../utils/tests/data'

const props = {
  cars: [],
  resultsCount: 0,
  fetchPage: jest.fn(),
  fetching: false
}

describe('CarsListPaginated', () => {
  PresentationalTest(CarsListPaginated, props)

  describe('While fetching', () => {
    test('Should match snapshot', () => {
      const wrapper = shallow(<CarsListPaginated {...props} fetching={true}/>)
      expect(wrapper.html()).toMatchSnapshot()
    })
  })

  describe('Show empty list', () => {
    test('Should match snapshot', () => {
      const wrapper = shallow(<CarsListPaginated {...props}/>)
      expect(wrapper.html()).toMatchSnapshot()
    })
  })

  describe('Show filled list', () => {
    test('Should match snapshot', () => {
      const wrapper = shallow(
        <CarsListPaginated
          {...props}
          cars={MOCK_CARS}
          resultsCount={MOCK_CARS.length}
        />
      )
      expect(wrapper.html()).toMatchSnapshot()
    })
  })
})
