import { apiRequest, isApiAction, API_REQUEST, API_SUCCESS, API_ERROR } from '../core/api'
import { GET_CARS } from '../../endpoints'
import { NAMESPACE, setFetching, setError, setCar } from '../../ducks/car'

export const fetchCar = stockNumber => {
  const { url, method } = GET_CARS
  return apiRequest(`${url}/${stockNumber}`, method, NAMESPACE)
}

export default function middleware () {
  return dispatch => action => {
    dispatch(action)

    if (!isApiAction(action, NAMESPACE)) return

    switch (action.type) {
      case API_REQUEST: {
        dispatch(setFetching(true))
        dispatch(setError(null))
        break
      }

      case API_SUCCESS: {
        dispatch(setFetching(false))
        dispatch(setCar(action.payload.car))
        break
      }

      case API_ERROR: {
        dispatch(setFetching(false))
        dispatch(setError(action.payload))
        break
      }
    }
  }
}
