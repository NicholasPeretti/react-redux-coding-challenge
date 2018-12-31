import DuckTest from '../../../utils/tests/duck'
import * as Car from '../car'
import { getGlobalState } from '../../../utils/tests/reducer'
import { CarsList } from '../../../utils/tests/data'
const MOCK_CAR = CarsList[0]

describe('Car', () => {
  DuckTest(Car)

  describe('Actions creators', () => {
    describe('setCar', () => {
      test('Should have the correct type', () => {
        const action = Car.setCar(MOCK_CAR)
        expect(action.type).toEqual(Car.SET_CAR)
      })

      test('Should have the correct value', () => {
        const action = Car.setCar(MOCK_CAR)
        expect(action.car).toEqual(MOCK_CAR)
      })
    })

    describe('setError', () => {
      test('Should have the correct type', () => {
        const error = 'error'
        const action = Car.setError(error)
        expect(action.type).toEqual(Car.SET_ERROR)
      })

      test('Should have the correct value', () => {
        const error = 'error'
        const action = Car.setError(error)
        expect(action.error).toEqual(error)
      })
    })

    describe('setFetching', () => {
      test('Should have the correct type', () => {
        const action = Car.setFetching(true)
        expect(action.type).toEqual(Car.SET_FETCHING)
      })

      test('Should have the correct value', () => {
        const action = Car.setFetching(true)
        expect(action.fetching).toEqual(true)
      })
    })

    describe('saveCar', () => {
      test('Should have the correct type', () => {
        const action = Car.saveCar()
        expect(action.type).toEqual(Car.SAVE_CAR)
      })

      test('Should have the correct value', () => {
        const value = 'stockNumber'
        const action = Car.saveCar(value)
        expect(action.stockNumber).toEqual(value)
      })
    })

    describe('unsaveCar', () => {
      test('Should have the correct type', () => {
        const action = Car.unsaveCar()
        expect(action.type).toEqual(Car.UNSAVE_CAR)
      })

      test('Should have the correct value', () => {
        const value = 'stockNumber'
        const action = Car.unsaveCar(value)
        expect(action.stockNumber).toEqual(value)
      })
    })
  })

  describe('Reducer', () => {
    describe('setCar', () => {
      test('Should set the `car` property', () => {
        const state = Car.default(null, Car.setCar(MOCK_CAR))
        expect(state.car).toEqual(MOCK_CAR)
      })
    })

    describe('setError', () => {
      test('Should set the `error` property', () => {
        const error = 'error'
        const state = Car.default(null, Car.setError(error))
        expect(state.error).toEqual(error)
      })
    })

    describe('setFetching', () => {
      test('Should set the `fetching` property', () => {
        const state = Car.default(null, Car.setFetching(true))
        expect(state.fetching).toEqual(true)
      })
    })

    describe('saveCar', () => {
      test('Should set `isCarSaved` to true', () => {
        const state = Car.default(null, Car.saveCar())
        expect(state.isCarSaved).toEqual(true)
      })
    })

    describe('unsaveCar', () => {
      test('Should set `isCarSaved` to false', () => {
        const state = Car.default(null, Car.unsaveCar())
        expect(state.isCarSaved).toEqual(false)
      })
    })
  })

  describe('Selectors', () => {
    describe('getState', () => {
      test('Should return the defaultState', () => {
        const globalState = getGlobalState()
        const state = Car.getState(globalState)
        expect(state).toEqual(Car.defaultState)
      })
    })

    describe('getCar', () => {
      test('Should return the `car` property', () => {
        const globalState = getGlobalState()
        const car = Car.getCar(globalState)
        expect(car).toEqual(Car.defaultState.car)
      })
    })

    describe('getError', () => {
      test('Should return the `error` property', () => {
        const globalState = getGlobalState()
        const error = Car.getError(globalState)
        expect(error).toEqual(Car.defaultState.error)
      })
    })

    describe('isFetching', () => {
      test('Should return the `fetching` property', () => {
        const globalState = getGlobalState()
        const fetching = Car.isFetching(globalState)
        expect(fetching).toEqual(Car.defaultState.fetching)
      })
    })

    describe('isCarSaved', () => {
      test('Should return the `isCarSaved` property', () => {
        const globalState = getGlobalState()
        const isCarSaved = Car.isCarSaved(globalState)
        expect(isCarSaved).toEqual(Car.defaultState.isCarSaved)
      })
    })
  })
})
