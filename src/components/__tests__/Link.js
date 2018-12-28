import React from 'react'
import { shallow } from 'enzyme'
import PresentationalTest from '../../utils/tests/presentational'
import Link from '../Link'
import { MemoryRouter } from 'react-router-dom'

const WrappedLink = (props) => (
  <MemoryRouter>
    <Link {...props} />
  </MemoryRouter>
)

describe('Link', () => {
  PresentationalTest(WrappedLink, { to: '/' })

  test('Should match snapshot', () => {
    const wrapper = shallow(<WrappedLink to='/page1'>This is a Link</WrappedLink>)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
