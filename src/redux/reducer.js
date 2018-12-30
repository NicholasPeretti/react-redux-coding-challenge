import { combineReducers } from 'redux'
import cars, { NAMESPACE as CARS_NAMESPACE } from './ducks/cars'
import colorsFilter, { NAMESPACE as COLORS_FILTER_NAMESPACE } from './ducks/colorsFilter'
import manufacturersFilter, { NAMESPACE as MANUFACTURERS_FILTER_NAMESPACE } from './ducks/manufacturersFilter'
import car, { NAMESPACE as CAR_NAMESPACE } from './ducks/car'

export default combineReducers({
  [CARS_NAMESPACE]: cars,
  [COLORS_FILTER_NAMESPACE]: colorsFilter,
  [MANUFACTURERS_FILTER_NAMESPACE]: manufacturersFilter,
  [CAR_NAMESPACE]: car
})
