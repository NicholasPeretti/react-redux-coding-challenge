import { Map } from 'immutable'

export const NAMESPACE = 'CARS'
export const SET_FETCHING = `${NAMESPACE} SET_FETCHING`
export const SET_PAGE = `${NAMESPACE} SET_PAGE`
export const SET_CARS = `${NAMESPACE} SET_CARS`
export const SET_TOTAL_PAGE_COUNT = `${NAMESPACE} SET_TOTAL_PAGE_COUNT`
export const SET_ERROR = `${NAMESPACE} SET_ERROR`
export const SET_MILEAGE_SORT = `${NAMESPACE} SET_MILEAGE_SORT`

export const setFetching = fetching => ({
  type: SET_FETCHING,
  fetching: !!fetching
})

export const setPage = (page = 1) => ({
  type: SET_PAGE,
  page
})

export const setCars = (cars = []) => ({
  type: SET_CARS,
  cars
})

export const setTotalPageCount = (totalPageCount = 1) => ({
  type: SET_TOTAL_PAGE_COUNT,
  totalPageCount
})

export const setError = error => ({
  type: SET_ERROR,
  error
})

export const setMileageSort = sortValue => ({
  type: SET_MILEAGE_SORT,
  sort: sortValue
})

export const getState = state => state[NAMESPACE]

export const getCars = state => getState(state).cars

export const getPage = state => getState(state).page

export const isFetching = state => getState(state).fetching

export const getPageSize = state => getState(state).pageSize

export const getResultsCount = state => getState(state).resultsCount

export const getTotalPages = state => getState(state).totalPageCount

export const hasNext = state => {
  const page = getPage(state)
  const totalPages = getTotalPages(state)

  return page < totalPages
}

export const hasPrev = state => getPage(state) > 1

export const getMileageSort = state => getState(state).mileageSort

export const getCar = (state, stockNumber) =>
  getState(state).carsMap.get(stockNumber)

export const defaultState = {
  cars: [],
  carsMap: new Map(),
  fetching: false,
  page: 1,
  totalPageCount: 1,
  pageSize: 10,
  error: null,
  mileageSort: null
}

export default function reducer (state = defaultState, action = {}) {
  switch (action.type) {
    case SET_FETCHING: {
      state = Object.assign({}, state, {
        fetching: action.fetching
      })
      break
    }

    case SET_PAGE: {
      state = Object.assign({}, state, {
        page: action.page
      })
      break
    }

    case SET_CARS: {
      const { cars } = action
      var carsMap = new Map()
      cars.forEach(car => {
        carsMap = carsMap.set(car.stockNumber, car)
      })

      state = Object.assign({}, state, {
        cars,
        carsMap
      })
      break
    }

    case SET_TOTAL_PAGE_COUNT: {
      state = Object.assign({}, state, {
        totalPageCount: action.totalPageCount
      })
      break
    }

    case SET_ERROR: {
      state = Object.assign({}, state, {
        error: action.error
      })
      break
    }

    case SET_MILEAGE_SORT: {
      let sort = action.sort

      if (sort > 0) sort = 1
      else if (sort < 0) sort = -1
      else sort = null

      state = Object.assign({}, state, {
        mileageSort: action.sort
      })
      break
    }
  }

  return state
}
