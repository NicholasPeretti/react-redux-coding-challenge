import api from './core/api'
import cars from './app/cars'
import colorsFilter from './app/colorsFilter'
import manufacturersFilter from './app/manufacturersFilter'

const CORE_MIDDLEWARES = [ api ]

export default [
  ...CORE_MIDDLEWARES,
  cars,
  colorsFilter,
  manufacturersFilter
]
