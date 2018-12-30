import React from 'react'
import CarsListPaginated from '../CarsListPaginated'
import PresentationalTest from '../../utils/tests/presentational'
import { shallow } from 'enzyme'
import { CarsList as MOCK_CARS } from '../../utils/tests/data'
import { MemoryRouter } from 'react-router-dom'

const WrappedCarsListPaginated = props => (
  <MemoryRouter>
    <CarsListPaginated {...props} />
  </MemoryRouter>
)

const props = {
  cars: [],
  resultsCount: 0,
  fetchPage: jest.fn(),
  fetching: false,
  hasNext: false,
  hasPrev: false,
  page: 1,
  totalPages: 1,
  setSort: jest.fn()
}

describe('CarsListPaginated', () => {
  PresentationalTest(WrappedCarsListPaginated, props)

  describe('While fetching', () => {
    test('Should match snapshot', () => {
      const wrapper = shallow(<WrappedCarsListPaginated {...props} fetching={true}/>)
      expect(wrapper.html()).toMatchSnapshot()
    })
  })

  describe('Show empty list', () => {
    test('Should match snapshot', () => {
      const wrapper = shallow(<WrappedCarsListPaginated {...props}/>)
      expect(wrapper.html()).toMatchSnapshot()
    })
  })

  describe('Show filled list', () => {
    test('Should match snapshot', () => {
      const wrapper = shallow(
        <WrappedCarsListPaginated
          {...props}
          cars={MOCK_CARS}
          resultsCount={MOCK_CARS.length}
        />
      )
      expect(wrapper.html()).toMatchSnapshot()
    })
  })
})
