import { isApiAction, API_REQUEST, API_SUCCESS, API_ERROR, apiRequest } from '../core/api'
import { NAMESPACE, SET_MILEAGE_SORT, setFetching, setCars, setResultsCount, setError, setPage, getMileageSort } from '../../ducks/cars'
import { GET_CARS } from '../../endpoints'

export const fetchPage = (page = 1) => {
  const { url, method } = GET_CARS
  return apiRequest(url, method, NAMESPACE, { page })
}

export default function middleware (store) {
  return dispatch => action => {
    if (action.type === SET_MILEAGE_SORT) {
      dispatch(action)
      store.dispatch(fetchPage(1))
      return
    }

    if (!isApiAction(action, NAMESPACE)) {
      dispatch(action)
      return
    }

    switch (action.type) {
      case API_REQUEST: {
        let state = store.getState()
        let mileageSort = getMileageSort(state)

        if (mileageSort) {
          action.payload.sort = mileageSort > 0 ? 'asc' : 'desc'
        }

        dispatch(action)
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
