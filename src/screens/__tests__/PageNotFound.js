import React from 'react'
import { shallow } from 'enzyme'
import PresentationalTest from '../../utils/tests/presentational'
import PageNotFound from '../PageNotFound'

describe('PageNotFound', () => {
  PresentationalTest(PageNotFound)

  test('Should match snapshot', () => {
    const wrapper = shallow(<PageNotFound/>)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
