import React from 'react'
import { shallow, mount } from 'enzyme'
import PresentationalTest from '../../utils/tests/presentational'
import CarDetailsPage from '../CarDetailsPage'
import { CarsList } from '../../utils/tests/data'
const MOCK_CAR = CarsList[0]

const props = {
  car: MOCK_CAR,
  isCarSaved: false,
  saveCar: jest.fn(),
  unsaveCar: jest.fn()
}
const carSavedProps = Object.assign({}, props, {
  isCarSaved: true
})

describe('CarDetailsPage', () => {
  PresentationalTest(CarDetailsPage, props)

  test('Should match snapshot when the car is not saved', () => {
    const wrapper = shallow(<CarDetailsPage {...props}/>)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('Should match snapshot when the car is saved', () => {
    const wrapper = shallow(<CarDetailsPage {...carSavedProps}/>)
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('Should call saveCar when the proper button is clicked', () => {
    const wrapper = mount(<CarDetailsPage {...props}/>)
    wrapper.find('button').simulate('click')
    expect(props.saveCar).toHaveBeenCalledTimes(1)
  })

  test('Should call unsaveCar when the proper button is clicked', () => {
    const wrapper = mount(<CarDetailsPage {...carSavedProps}/>)
    wrapper.find('button').simulate('click')
    expect(carSavedProps.unsaveCar).toHaveBeenCalledTimes(1)
  })
})
