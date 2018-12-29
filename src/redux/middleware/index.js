import api from './core/api'
import cars from './app/cars'
import colorsFilter from './app/colorsFilter'

const CORE_MIDDLEWARES = [ api ]

export default [
  ...CORE_MIDDLEWARES,
  cars,
  colorsFilter
]
