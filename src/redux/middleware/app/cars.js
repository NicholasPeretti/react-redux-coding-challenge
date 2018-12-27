import { isApiAction, API_REQUEST, API_SUCCESS, API_ERROR, apiRequest } from '../core/api'
import { NAMESPACE, setFetching, setCars, setResultsCount, setError, setPage } from '../../ducks/cars'
import { GET_CARS } from '../../endpoints'

export const fetchPage = (page = 1) => {
  const { url, method } = GET_CARS
  return apiRequest(url, method, NAMESPACE, { page })
}

export default function middleware () {
  return dispatch => action => {
    dispatch(action)

    if (!isApiAction(action, NAMESPACE)) return

    switch (action.type) {
      case API_REQUEST: {
        dispatch(setFetching(true))
        dispatch(setPage(action.payload.page))
        break
      }

      case API_SUCCESS: {
        dispatch(setFetching(false))
        dispatch(setCars(action.payload.cars))
        dispatch(setResultsCount(action.payload.totalPageCount))
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
