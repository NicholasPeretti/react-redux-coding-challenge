import React from 'react'
import { shallow } from 'enzyme'
import PresentationalTest from '../../utils/tests/presentational'
import Button from '../Button'

describe('Button', () => {
  PresentationalTest(Button)

  test('Should match snapshot', () => {
    const wrapper = shallow(<Button/>)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
