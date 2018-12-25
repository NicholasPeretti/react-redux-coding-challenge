import React from 'react'
import { mount } from 'enzyme'
import Dropdown from '../Dropdown'
import PresentationalTest from '../../utils/tests/presentational'

const props = {
  items: [
    'opt1',
    'opt2',
    'opt3'
  ]
}

const getWrapper = (onChange) => (
  mount(<Dropdown {...props} onChange={onChange}/>)
)

describe('Dropdown', () => {
  PresentationalTest(Dropdown, props)

  test('Should match snapshot', () => {
    const wrapper = getWrapper()
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('Should match snapshot when open', () => {
    const wrapper = getWrapper()
    wrapper.find('button').simulate('click')
    expect(wrapper.html()).toMatchSnapshot()
  })

  describe('Dropdown behaviour', () => {
    test('Should show the button', () => {
      const wrapper = getWrapper()
      expect(wrapper.exists('button')).toEqual(true)
    })

    test('Should show the list when clicked', () => {
      const wrapper = getWrapper()
      wrapper.find('button').simulate('click')
      expect(wrapper.exists('ul')).toBe(true)
    })

    test('Should hide the list when an option is clicked', () => {
      const wrapper = getWrapper()
      wrapper.find('button').simulate('click')
      wrapper.find('li').last().simulate('click')
      expect(wrapper.exists('ul')).toBe(false)
    })

    test('Should call onChange when an option is clicked', () => {
      const onChange = jest.fn()
      const wrapper = getWrapper(onChange)

      wrapper.find('button').simulate('click')
      wrapper.find('li').last().simulate('click')

      expect(onChange).toHaveBeenCalled()
    })

    test('Should set the right value after selection', () => {
      const wrapper = getWrapper()
      const { items } = props

      wrapper.find('button').simulate('click')
      wrapper.find('li').last().simulate('click')

      expect(wrapper.state().value).toEqual(
        items[items.length - 1]
      )
    })
  })
})
