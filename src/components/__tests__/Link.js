import React from 'react'
import { shallow } from 'enzyme'
import PresentationalTest from '../../utils/tests/presentational'
import Link from '../Link'

describe('Link', () => {
  PresentationalTest(Link)

  test('Should match snapshot', () => {
    const wrapper = shallow(<Link to='/page1'>This is a Link</Link>)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
