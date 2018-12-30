import React from 'react'
import { shallow, mount } from 'enzyme'
import PresentationalTest from '../../utils/tests/presentational'
import DropdownFilter from '../DropdownFilter'

const props = {
  label: 'Test label',
  items: ['a', 'b'],
  onChange: jest.fn()
}

describe('DropdownFilter', () => {
  PresentationalTest(DropdownFilter, props)

  test('Should match snapshot', () => {
    const wrapper = shallow(<DropdownFilter {...props} />)
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('Should call `onChange` when the dropdown changes', () => {
    const onChange = jest.fn()
    const wrapper = mount(<DropdownFilter {...props} onChange={onChange}/>)

    wrapper.find('button').simulate('click')
    wrapper.find('li').last().simulate('click')

    expect(onChange).toHaveBeenCalled()
  })

  test('Should call initialFetch if passed as prop', () => {
    const initialFetch = jest.fn()
    const wrapper = mount(<DropdownFilter {...props} initialFetch={initialFetch}/>)

    wrapper.find('button').simulate('click')
    wrapper.find('li').last().simulate('click')

    expect(initialFetch).toHaveBeenCalled()
  })
})
