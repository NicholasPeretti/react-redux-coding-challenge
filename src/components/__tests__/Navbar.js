import React from 'react'
import { shallow } from 'enzyme'
import PresentationalTest from '../../utils/tests/presentational'
import Navbar from '../Navbar'

describe('Navbar', () => {
  PresentationalTest(Navbar)

  test('Should match snapshot', () => {
    const wrapper = shallow(<Navbar/>)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
