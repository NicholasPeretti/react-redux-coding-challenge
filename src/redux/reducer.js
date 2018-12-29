import { combineReducers } from 'redux'
import cars, { NAMESPACE as CARS_NAMESPACE } from './ducks/cars'
import colorsFilter, { NAMESPACE as COLORS_FILTER_NAMESPACE } from './ducks/colorsFilter'

export default combineReducers({
  [CARS_NAMESPACE]: cars,
  [COLORS_FILTER_NAMESPACE]: colorsFilter
})
