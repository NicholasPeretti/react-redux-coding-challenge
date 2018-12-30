import React from 'react'
import { shallow, mount } from 'enzyme'
import PresentationalTest from '../../utils/tests/presentational'
import Button from '../Button'

describe('Button', () => {
  PresentationalTest(Button)

  test('Should match snapshot', () => {
    const wrapper = shallow(<Button/>)
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('Should call onClick when clicked', () => {
    const onClick = jest.fn()
    const wrapper = mount(<Button onClick={onClick}/>)

    wrapper.find('button').simulate('click')
    expect(onClick).toHaveBeenCalled()
  })
})
