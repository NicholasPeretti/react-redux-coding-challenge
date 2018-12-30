export const NAMESPACE = 'COLOR_FILTER'
export const SET_COLORS = `${NAMESPACE} SET_COLORS`
export const SELECT_COLOR = `${NAMESPACE} SELECT_COLOR`
export const SET_ERROR = `${NAMESPACE} SET_ERROR`
export const SET_FETCHING = `${NAMESPACE} SET_FETCHING`

export const setColors = colors => ({
  type: SET_COLORS,
  colors
})

export const selectColor = color => ({
  type: SELECT_COLOR,
  color
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
  selectedColor: null,
  colors: [],
  error: null,
  fetching: false
}

export default function reducer (state = defaultState, action = {}) {
  switch (action.type) {
    case SET_COLORS: {
      const { colors } = action
      state = Object.assign({}, state, { colors })
      break
    }

    case SELECT_COLOR: {
      state = Object.assign({}, state, {
        selectedColor: action.color
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
