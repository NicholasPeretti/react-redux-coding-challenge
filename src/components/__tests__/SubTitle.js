import React from 'react'
import { shallow } from 'enzyme'
import PresentationalTest from '../../utils/tests/presentational'
import SubTitle from '../SubTitle'

describe('SubTitle', () => {
  PresentationalTest(SubTitle)

  test('Should match snapshot', () => {
    const wrapper = shallow(<SubTitle>This is a SubTitle</SubTitle>)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
