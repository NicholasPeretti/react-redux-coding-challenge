import React from 'react'
import { shallow } from 'enzyme'
import PresentationalTest from '../../utils/tests/presentational'
import PageNotFound from '../PageNotFound'
import { MemoryRouter } from 'react-router-dom'

const WrappedPageNotFound = props => (
  <MemoryRouter>
    <PageNotFound {...props} />
  </MemoryRouter>
)

describe('PageNotFound', () => {
  PresentationalTest(WrappedPageNotFound)

  test('Should match snapshot', () => {
    const wrapper = shallow(<WrappedPageNotFound/>)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
