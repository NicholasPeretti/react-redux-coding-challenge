export const NAMESPACE = 'MANUFACTURERS_FILTER'
export const SET_FETCHING = `${NAMESPACE} SET_FETCHING`
export const SET_ERROR = `${NAMESPACE} SET_ERROR`
export const SET_MANUFACTURERS = `${NAMESPACE} SET_MANUFACTURERS`
export const SELECT_MANUFACTURER = `${NAMESPACE} SELECT_MANUFACTURER`

export const selectManufacturer = manufacturer => ({
  type: SELECT_MANUFACTURER,
  manufacturer
})

export const setManufacturers = manufacturers => ({
  type: SET_MANUFACTURERS,
  manufacturers
})

export const setError = error => ({
  type: SET_ERROR,
  error
})

export const setFetching = fetching => ({
  type: SET_FETCHING,
  fetching
})

export const defaultState = {
  fetching: false,
  error: null,
  manufacturers: [],
  selectedManufacturer: null
}

export default function reducer (state = defaultState, action = {}) {
  switch (action.type) {
    case SET_MANUFACTURERS: {
      state = Object.assign({}, state, {
        manufacturers: action.manufacturers.map(el => el.name)
      })
      break
    }

    case SELECT_MANUFACTURER: {
      state = Object.assign({}, state, {
        selectedManufacturer: action.manufacturer
      })
      break
    }

    case SET_ERROR: {
      state = Object.assign({}, state, {
        error: action.error
      })
      break
    }

    case SET_FETCHING: {
      state = Object.assign({}, state, {
        fetching: action.fetching
      })
      break
    }
  }

  return state
}
