import { setFetching, setError, setManufacturers, NAMESPACE, getSelectedManufacturer, SELECT_MANUFACTURER } from '../../ducks/manufacturersFilter'
import { NAMESPACE as CARS_NAMESPACE } from '../../ducks/cars'
import { isApiAction, API_ERROR, API_REQUEST, API_SUCCESS, apiRequest } from '../core/api'
import { GET_MANUFACTURERS } from '../../endpoints'
import { fetchPage } from './cars'

export const fetchManufacturers = () => {
  const { url, method } = GET_MANUFACTURERS
  return apiRequest(url, method, NAMESPACE)
}

export default function middleware (store) {
  return dispatch => action => {
    if (isApiAction(action, CARS_NAMESPACE) && action.type === API_REQUEST) {
      const selectedManufacturer = getSelectedManufacturer(store.getState())

      if (selectedManufacturer) {
        action.payload.manufacturer = selectedManufacturer
      }
    }

    dispatch(action)

    if (action.type === SELECT_MANUFACTURER) {
      store.dispatch(fetchPage(1))
    }

    handleApiMiddlewareActions(dispatch, action)
  }
}

function handleApiMiddlewareActions (dispatch, action) {
  if (!isApiAction(action, NAMESPACE)) return

  switch (action.type) {
    case API_REQUEST: {
      dispatch(setFetching(true))
      dispatch(setError(null))
      break
    }

    case API_SUCCESS: {
      const { manufacturers } = action.payload
      dispatch(setManufacturers(manufacturers))
      dispatch(setFetching(false))
      break
    }

    case API_ERROR: {
      const error = action.payload
      dispatch(setError(error))
      dispatch(setFetching(false))
      break
    }
  }
}
