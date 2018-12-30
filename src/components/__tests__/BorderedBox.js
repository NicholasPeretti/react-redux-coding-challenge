import React from 'react'
import { shallow } from 'enzyme'
import PresentationalTest from '../../utils/tests/presentational'
import BorderedBox from '../BorderedBox'

describe('BorderedBox', () => {
  PresentationalTest(BorderedBox)

  test('Should match snapshot', () => {
    const wrapper = shallow(<BorderedBox/>)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
