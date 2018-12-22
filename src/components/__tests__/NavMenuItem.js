import React from 'react'
import { shallow } from 'enzyme'
import PresentationalTest from '../../utils/tests/presentational'
import NavMenuItem from '../NavMenuItem'

describe('NavMenuItem', () => {
  PresentationalTest(NavMenuItem)

  test('Should match snapshot', () => {
    const wrapper = shallow(<NavMenuItem/>)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
