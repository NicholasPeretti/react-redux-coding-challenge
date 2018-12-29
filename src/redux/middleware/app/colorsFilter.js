import {
  apiRequest,
  isApiAction,
  API_SUCCESS,
  API_ERROR,
  API_REQUEST
} from '../core/api'
import { GET_COLORS } from '../../endpoints'
import { NAMESPACE, setColors, setError, setFetching } from '../../ducks/colorsFilter'

export const fetchColors = () => {
  const { url, method } = GET_COLORS
  return apiRequest(url, method, NAMESPACE)
}

export default function middleware () {
  return dispatch => action => {
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
