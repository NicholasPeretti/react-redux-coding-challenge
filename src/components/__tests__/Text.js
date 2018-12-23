import React from 'react'
import { shallow } from 'enzyme'
import PresentationalTest from '../../utils/tests/presentational'
import Text from '../Text'

describe('Text', () => {
  PresentationalTest(Text)

  test('Should match snapshot', () => {
    const wrapper = shallow(<Text>This is a Text</Text>)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
