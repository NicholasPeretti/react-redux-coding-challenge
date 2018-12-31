import { apiRequest, isApiAction, API_REQUEST, API_SUCCESS, API_ERROR } from '../core/api'
import { GET_CARS } from '../../endpoints'
import { NAMESPACE, setFetching, setError, setCar, SAVE_CAR, UNSAVE_CAR, getCar } from '../../ducks/car'
import { getCar as getCarFromCarsStore } from '../../ducks/cars'

export const fetchCar = stockNumber => {
  const { url, method } = GET_CARS
  return apiRequest(`${url}/${stockNumber}`, method, NAMESPACE)
}

export default function middleware (store) {
  return dispatch => action => {
    if (!isApiAction(action, NAMESPACE)) {
      dispatch(action)

      switch (action.type) {
        case SAVE_CAR: {
          let car = getCar(store.getState())
          window.localStorage.setItem(car.stockNumber, JSON.stringify(car))
          break
        }

        case UNSAVE_CAR: {
          let car = getCar(store.getState())
          window.localStorage.removeItem(car.stockNumber)
        }
      }

      return
    }

    if (isApiAction(action, NAMESPACE) && action.type === API_REQUEST) {
      let stockNumber = getStockNumberFromAction(action)
      let car = getCarFromCarsStore(
        store.getState(),
        stockNumber
      )

      if (car) {
        action = { type: 'ABORT FETCH - DATA ALREADY STORED' }
        dispatch(action)
        dispatch(setCar(car))
        return
      }

      dispatch(setFetching(true))
      dispatch(setError(null))
    }

    switch (action.type) {
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

function getStockNumberFromAction (action) {
  let url = action.meta.url
  let urlParts = url.split('/')
  return parseInt(urlParts[urlParts.length - 1])
}
