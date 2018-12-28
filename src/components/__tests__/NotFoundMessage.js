import React from 'react'
import { shallow } from 'enzyme'
import PresentationalTest from '../../utils/tests/presentational'
import NotFoundMessage from '../NotFoundMessage'
import { MemoryRouter } from 'react-router-dom'

const WrappedNotFoundMessage = props => (
  <MemoryRouter>
    <NotFoundMessage {...props} />
  </MemoryRouter>
)

describe('NotFoundMessage', () => {
  PresentationalTest(WrappedNotFoundMessage)

  test('Should match snapshot', () => {
    const wrapper = shallow(<WrappedNotFoundMessage/>)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
