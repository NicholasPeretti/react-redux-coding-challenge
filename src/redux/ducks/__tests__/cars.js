import DuckTest from '../../../utils/tests/duck'
import { getGlobalState } from '../../../utils/tests/reducer'
import { Map } from 'immutable'
import * as Cars from '../cars'

const MOCK_CARS = [
  {
    stockNumber: 10056,
    manufacturerName: 'Skoda',
    modelName: 'Roomster',
    color: 'white',
    mileage: {
      number: 186087,
      unit: 'km'
    },
    fuelType: 'Petrol',
    pictureUrl: 'http://localhost:3001/car.svg'
  },
  {
    stockNumber: 10205,
    manufacturerName: 'Mercedes-Benz',
    modelName: 'SLR McLaren',
    color: 'red',
    mileage: {
      number: 186400,
      unit: 'km'
    },
    fuelType: 'Petrol',
    pictureUrl: 'http://localhost:3001/car.svg'
  }
]

describe('Cars', () => {
  DuckTest(Cars)

  describe('Actions creators', () => {
    describe('setFetching', () => {
      test('Should have the correct action type', () => {
        const action = Cars.setFetching()
        expect(action.type).toEqual(Cars.SET_FETCHING)
      })

      test('Should have the correct value (false)', () => {
        const action = Cars.setFetching(false)
        expect(action.fetching).toEqual(false)
      })

      test('Should have the correct value (true)', () => {
        const action = Cars.setFetching(true)
        expect(action.fetching).toEqual(true)
      })

      test('Should set false as default', () => {
        const action = Cars.setFetching()
        expect(action.fetching).toEqual(false)
      })
    })

    describe('setPage', () => {
      test('Should have the correct action type', () => {
        const action = Cars.setPage()
        expect(action.type).toEqual(Cars.SET_PAGE)
      })

      test('Should have the correct value', () => {
        const page = 3
        const action = Cars.setPage(page)
        expect(action.page).toEqual(page)
      })

      test('Should set 1 as default', () => {
        const action = Cars.setPage()
        expect(action.page).toBe(1)
      })
    })

    describe('setCars', () => {
      test('Should have the correct action type', () => {
        const action = Cars.setCars()
        expect(action.type).toEqual(Cars.SET_CARS)
      })

      test('Should have the correct value', () => {
        const action = Cars.setCars(MOCK_CARS)
        expect(action.cars).toEqual(MOCK_CARS)
      })

      test('Should set [] as default', () => {
        const action = Cars.setCars()
        expect(action.cars).toEqual([])
      })
    })

    describe('setResultsCount', () => {
      test('Should have the correct action type', () => {
        const action = Cars.setResultsCount()
        expect(action.type).toEqual(Cars.SET_RESULTS_COUNT)
      })

      test('Should have the correct value', () => {
        const resultsCount = 6
        const action = Cars.setResultsCount(resultsCount)
        expect(action.resultsCount).toEqual(resultsCount)
      })

      test('Should set 0 as default', () => {
        const action = Cars.setResultsCount()
        expect(action.resultsCount).toEqual(0)
      })
    })

    describe('setError', () => {
      test('Should have the correct action type', () => {
        const action = Cars.setError()
        expect(action.type).toEqual(Cars.SET_ERROR)
      })

      test('Should have the correct value', () => {
        const error = 'ERROR'
        const action = Cars.setError(error)
        expect(action.error).toEqual(error)
      })
    })
  })

  describe('Selectors', () => {
    describe('getState', () => {
      test('Should return the default state', () => {
        const globalState = getGlobalState()
        const state = Cars.getState(globalState)
        expect(state).toEqual(Cars.defaultState)
      })
    })

    describe('getCars', () => {
      test('Should return the cars array', () => {
        const globalState = getGlobalState()
        const cars = Cars.getCars(globalState)
        expect(cars).toEqual(Cars.defaultState.cars)
      })
    })

    describe('getPage', () => {
      test('Should return the current page', () => {
        const globalState = getGlobalState()
        const page = Cars.getPage(globalState)
        expect(page).toEqual(Cars.defaultState.page)
      })
    })

    describe('isFetching', () => {
      test('Should return the fetching property', () => {
        const globalState = getGlobalState()
        const fetching = Cars.isFetching(globalState)
        expect(fetching).toEqual(Cars.defaultState.fetching)
      })
    })

    describe('getPageSize', () => {
      test('Should return the page size', () => {
        const globalState = getGlobalState()
        const pageSize = Cars.getPageSize(globalState)
        expect(pageSize).toEqual(Cars.defaultState.pageSize)
      })
    })

    describe('getResultsCount', () => {
      test('Should return the results count', () => {
        const globalState = getGlobalState()
        const resultsCount = Cars.getResultsCount(globalState)
        expect(resultsCount).toEqual(Cars.defaultState.resultsCount)
      })
    })

    describe('getTotalPages', () => {
      test('Should return the pages count', () => {
        var globalState = getGlobalState()
        globalState.resultsCount = 97
        const pagesCount = Cars.getTotalPages(globalState)
        const { pageSize, resultsCount } = globalState
        var expectedPagesCount =
          parseInt(resultsCount / pageSize) + (resultsCount % pageSize) ? 1 : 0

        expectedPagesCount = expectedPagesCount || 1

        expect(pagesCount).toEqual(expectedPagesCount)
      })
      test('Should return 1 with resultsCount 0', () => {
        var globalState = getGlobalState()
        globalState.CARS.resultsCount = 0
        expect(Cars.getTotalPages(globalState)).toEqual(1)
      })
    })
  })

  describe('Reducer', () => {
    describe('setFetching', () => {
      test('Should set the `fetching` property to the value passed', () => {
        const newState = Cars.default(Cars.defaultState, Cars.setFetching(true))
        expect(newState.fetching).toBe(true)
      })
    })

    describe('setCars', () => {
      test('Should set the `cars` property to the value passed', () => {
        const newState = Cars.default(
          Cars.defaultState,
          Cars.setCars(MOCK_CARS)
        )
        expect(newState.cars).toEqual(MOCK_CARS)
      })

      test('Should set the `carsMap` property', () => {
        const newState = Cars.default(
          Cars.defaultState,
          Cars.setCars(MOCK_CARS)
        )
        var expectedMap = new Map()
        MOCK_CARS.forEach(car => {
          expectedMap = expectedMap.set(car.stockNumber, car)
        })
        expect(newState.carsMap).toEqual(expectedMap)
      })
    })

    describe('setPage', () => {
      test('Should set the `page` property to the value passed', () => {
        const page = 4
        const newState = Cars.default(Cars.defaultState, Cars.setPage(page))
        expect(newState.page).toEqual(page)
      })
    })

    describe('setResultsCount', () => {
      test('Should set the `resultsCount` property to the value passed', () => {
        const resultsCount = 4
        const newState = Cars.default(
          Cars.defaultState,
          Cars.setResultsCount(resultsCount)
        )
        expect(newState.resultsCount).toEqual(resultsCount)
      })
    })

    describe('setError', () => {
      test('Should set the `error` property to the value passed', () => {
        const error = 'Error'
        const newState = Cars.default(Cars.defaultState, Cars.setError(error))
        expect(newState.error).toEqual(error)
      })
    })
  })
})
