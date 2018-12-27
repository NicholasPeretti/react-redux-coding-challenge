import api from './core/api'
import cars from './app/cars'

const CORE_MIDDLEWARES = [ api ]

export default [
  ...CORE_MIDDLEWARES,
  cars
]
