import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import middlewares from './middleware'

export default createStore(
  reducer,
  applyMiddleware(...middlewares)
)
