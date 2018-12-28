import React from 'react'
import { shallow } from 'enzyme'
import PresentationalTest from '../../utils/tests/presentational'
import PaginationNav from '../PaginationNav'

const props = {
  page: 1,
  hasNext: false,
  hasPrev: false,
  totalPages: 1,
  fetchPage: jest.fn()
}

describe('PaginationNav', () => {
  PresentationalTest(PaginationNav, props)

  test('Should match snapshot', () => {
    const wrapper = shallow(<PaginationNav {...props}/>)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
