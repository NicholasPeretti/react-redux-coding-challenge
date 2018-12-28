import React from 'react'
import { shallow } from 'enzyme'
import PresentationalTest from '../../utils/tests/presentational'
import CarsListSortBox from '../CarsListSortBox'

const props = {
  setSort: jest.fn()
}

describe('CarsListSortBox', () => {
  PresentationalTest(CarsListSortBox, props)

  test('Should match snapshot', () => {
    const wrapper = shallow(<CarsListSortBox {...props} />)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
