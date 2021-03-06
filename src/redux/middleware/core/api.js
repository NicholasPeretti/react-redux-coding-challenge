export const API_REQUEST = 'API_REQUEST'
export const API_ERROR = 'API_ERROR'
export const API_SUCCESS = 'API_SUCCESS'

export const apiRequest = (url, method, namespace, params) => ({
  type: API_REQUEST,
  payload: params,
  meta: { url, method, namespace }
})

export const apiSuccess = (data, namespace) => ({
  type: API_SUCCESS,
  payload: data,
  meta: { namespace }
})

export const apiError = (error, namespace) => {
  if (typeof error === 'object') {
    error = error.toString()
  }

  return {
    type: API_ERROR,
    payload: error,
    meta: { namespace }
  }
}

export const isApiAction = (action = {}, namespace) => {
  if (
    !action ||
    !action.type ||
    typeof action.type !== 'string' ||
    !action.meta ||
    !action.meta.namespace ||
    typeof action.meta.namespace !== 'string'
  ) return false

  const availableActionTypes = [
    API_ERROR,
    API_SUCCESS,
    API_REQUEST
  ]
  if (availableActionTypes.indexOf(action.type) < 0) {
    return false
  }

  if (namespace && namespace !== action.meta.namespace) {
    return false
  }

  return true
}

export default function middleware () {
  return dispatch => action => {
    dispatch(action)

    if (action.type === API_REQUEST) {
      let { url, method, namespace } = action.meta
      let fetchParams = populateFetchParams(url, method, action.payload)

      fetch(...fetchParams)
        .then(res => {
          if (res.status === 200) return res.json()
          return Promise.resolve({})
        })
        .then(data => dispatch(apiSuccess(data, namespace)))
        .catch(error => dispatch(apiError(error, namespace)))
    }
  }
}

function populateFetchParams (url, method = 'get', params = {}) {
  let paramsList = []

  for (let key in params) {
    let value = params[key]
    paramsList.push(`${key}=${value}`)
  }

  if (paramsList.length) {
    url += `?${paramsList.join('&')}`
  }

  return [url, { method }]
}
