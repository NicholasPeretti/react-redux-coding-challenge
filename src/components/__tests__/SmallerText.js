import React from 'react'
import { shallow } from 'enzyme'
import PresentationalTest from '../../utils/tests/presentational'
import SmallerText from '../SmallerText'

describe('SmallerText', () => {
  PresentationalTest(SmallerText)

  test('Should match snapshot', () => {
    const wrapper = shallow(<SmallerText>This is a SmallerText</SmallerText>)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
