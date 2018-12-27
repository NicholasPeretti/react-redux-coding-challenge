import { combineReducers } from 'redux'
import cars, { NAMESPACE as CARS_NAMESPACE } from './ducks/cars'

export default combineReducers({
  [CARS_NAMESPACE]: cars
})
