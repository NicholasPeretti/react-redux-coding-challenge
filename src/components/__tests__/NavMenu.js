import React from 'react'
import { shallow } from 'enzyme'
import PresentationalTest from '../../utils/tests/presentational'
import NavMenu from '../NavMenu'

describe('NavMenu', () => {
  PresentationalTest(NavMenu)

  test('Should match snapshot', () => {
    const wrapper = shallow(<NavMenu/>)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
