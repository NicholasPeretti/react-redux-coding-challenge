import React from 'react'
import { shallow } from 'enzyme'
import PresentationalTest from '../../utils/tests/presentational'
import Title from '../Title'

describe('Title', () => {
  PresentationalTest(Title)

  test('Should match snapshot', () => {
    const wrapper = shallow(<Title>This is a title</Title>)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
