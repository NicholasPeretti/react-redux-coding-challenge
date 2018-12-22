import React from 'react'
import { shallow } from 'enzyme'
import PresentationalTest from '../../utils/tests/presentational'
import Footer from '../Footer'

describe('Footer', () => {
  PresentationalTest(Footer)

  test('Should match snapshot', () => {
    const wrapper = shallow(<Footer/>)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
