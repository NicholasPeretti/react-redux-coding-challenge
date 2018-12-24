import React from 'react'
import { shallow } from 'enzyme'
import PresentationalTest from '../../utils/tests/presentational'
import NotFoundMessage from '../NotFoundMessage'

describe('NotFoundMessage', () => {
  PresentationalTest(NotFoundMessage)

  test('Should match snapshot', () => {
    const wrapper = shallow(<NotFoundMessage/>)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
