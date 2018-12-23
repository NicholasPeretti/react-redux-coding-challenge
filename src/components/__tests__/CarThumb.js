import React from 'react'
import { shallow } from 'enzyme'
import CarThumb from '../CarThumb'
import PresentationalTest from '../../utils/tests/presentational'

const props = {
  url: '/pic/pic1.png'
}

describe('CarThumb', () => {
  PresentationalTest(CarThumb, props)

  const wrapper = shallow(<CarThumb {...props} />)

  test('Should match snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
