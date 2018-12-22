import React from 'react'
import { shallow } from 'enzyme'
import PresentationalTest from '../../utils/tests/presentational'
import NavLogo from '../NavLogo'

describe('NavLogo', () => {
  PresentationalTest(NavLogo)

  test('Should match snapshot', () => {
    const wrapper = shallow(<NavLogo/>)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
