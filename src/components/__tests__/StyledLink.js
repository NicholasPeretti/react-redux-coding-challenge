import React from 'react'
import { shallow } from 'enzyme'
import PresentationalTest from '../../utils/tests/presentational'
import StyledLink from '../StyledLink'

describe('PaginationNav', () => {
  PresentationalTest(StyledLink)

  test('Should match snapshot', () => {
    const wrapper = shallow(<StyledLink/>)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
