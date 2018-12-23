import React from 'react'
import { shallow } from 'enzyme'
import PresentationalTest from '../../utils/tests/presentational'
import SubTitleBold from '../SubTitleBold'

describe('SubTitleBold', () => {
  PresentationalTest(SubTitleBold)

  test('Should match snapshot', () => {
    const wrapper = shallow(<SubTitleBold>This is a SubTitleBold</SubTitleBold>)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
