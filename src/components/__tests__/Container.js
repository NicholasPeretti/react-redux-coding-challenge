import React from 'react'
import { shallow } from 'enzyme'
import PresentationalTest from '../../utils/tests/presentational'
import Container from '../Container'

describe('Container', () => {
  PresentationalTest(Container)

  test('Should match snapshot', () => {
    const wrapper = shallow(<Container>This is a Container</Container>)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
