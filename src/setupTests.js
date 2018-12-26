import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import fetch from 'jest-fetch-mock'

global.fetch = fetch

Enzyme.configure({ adapter: new Adapter() })
