import {
  apiRequest,
  isApiAction,
  API_SUCCESS,
  API_ERROR,
  API_REQUEST
} from '../core/api'
import { GET_COLORS } from '../../endpoints'
import { NAMESPACE, setColors, setError, setFetching, getSelectedColor } from '../../ducks/colorsFilter'
import { NAMESPACE as CARS_NAMESPACE } from '../../ducks/cars'

export const fetchColors = () => {
  const { url, method } = GET_COLORS
  return apiRequest(url, method, NAMESPACE)
}

export default function middleware (store) {
  return dispatch => action => {
    if (isApiAction(action, CARS_NAMESPACE)) {
      if (action.type === API_REQUEST) {
        const selectedColor = getSelectedColor(store.getState())

        if (selectedColor) {
          action.payload.color = selectedColor
        }
      }
    }

    dispatch(action)

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
      const { colors } = action.payload
      dispatch(setColors(colors))
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
