export const NAMESPACE = 'CAR'

export const SET_CAR = `${NAMESPACE} SET_CAR`
export const SET_ERROR = `${NAMESPACE} SET_ERROR`
export const SET_FETCHING = `${NAMESPACE} SET_FETCHING`
export const SAVE_CAR = `${NAMESPACE} SAVE_CAR`
export const UNSAVE_CAR = `${NAMESPACE} UNSAVE_CAR`

export const setCar = car => ({
  type: SET_CAR,
  car
})

export const setError = error => ({
  type: SET_ERROR,
  error
})

export const setFetching = fetching => ({
  type: SET_FETCHING,
  fetching
})

export const saveCar = () => ({
  type: SAVE_CAR
})

export const unsaveCar = () => ({
  type: UNSAVE_CAR
})

export const getState = state => state[NAMESPACE]

export const getCar = state => getState(state).car

export const getError = state => getState(state).error

export const isFetching = state => getState(state).fetching

export const isCarSaved = state => {
  let car = getCar(state)
  return !!window.localStorage.getItem(car.stockNumber)
}

export const defaultState = {
  car: null,
  fetching: false,
  error: null
}

export default function reducer (state = defaultState, action = {}) {
  switch (action.type) {
    case SET_CAR: {
      state = Object.assign({}, state, {
        car: action.car
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
