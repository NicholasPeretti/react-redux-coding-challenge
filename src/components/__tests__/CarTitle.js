import React from 'react'
import { shallow } from 'enzyme'
import PresentationalTest from '../../utils/tests/presentational'
import CarTitle from '../CarTitle'
const props = {
  manufacturerName: 'Fiat',
  modelName: 'Marea'
}

describe('CarTitle', () => {
  PresentationalTest(CarTitle, props)

  const wrapper = shallow(<CarTitle {...props}/>)

  test('Should match snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
