import DuckTest from '../../../utils/tests/duck'
import * as manufacturersFilter from '../manufacturersFilter'
import { getGlobalState } from '../../../utils/tests/reducer'
import { Manufacturers as MOCK_MANUFACTURERS } from '../../../utils/tests/data'

describe('ManufacturersFilter', () => {
  DuckTest(manufacturersFilter)

  test('defaultState should match snapshot', () => {
    expect(manufacturersFilter.defaultState).toMatchSnapshot()
  })

  describe('Action creators', () => {
    describe('setManufacturers', () => {
      test('Should have the correct type', () => {
        const action = manufacturersFilter.setManufacturers()
        expect(action.type).toEqual(manufacturersFilter.SET_MANUFACTURERS)
      })

      test('Should have the correct value', () => {
        const action = manufacturersFilter.setManufacturers(MOCK_MANUFACTURERS)
        expect(action.manufacturers).toEqual(MOCK_MANUFACTURERS)
      })
    })

    describe('selectManufacturer', () => {
      test('Should have the correct type', () => {
        const manufacturer = MOCK_MANUFACTURERS[0].name
        const action = manufacturersFilter.selectManufacturer(manufacturer)
        expect(action.type).toEqual(manufacturersFilter.SELECT_MANUFACTURER)
      })

      test('Should have the correct value', () => {
        const manufacturer = MOCK_MANUFACTURERS[0].name
        const action = manufacturersFilter.selectManufacturer(manufacturer)
        expect(action.manufacturer).toEqual(manufacturer)
      })
    })

    describe('setError', () => {
      test('Should have the correct type', () => {
        const action = manufacturersFilter.setError()
        expect(action.type).toEqual(manufacturersFilter.SET_ERROR)
      })

      test('Should have the correct value', () => {
        const error = 'Error'
        const action = manufacturersFilter.setError(error)
        expect(action.error).toEqual(error)
      })
    })

    describe('setFetching', () => {
      test('Should have the correct type', () => {
        const action = manufacturersFilter.setFetching(true)
        expect(action.type).toEqual(manufacturersFilter.SET_FETCHING)
      })

      test('Should have the correct value', () => {
        const action = manufacturersFilter.setFetching(true)
        expect(action.fetching).toEqual(true)
      })
    })
  })

  describe('Selectors', () => {
    describe('getState', () => {
      test('Should return the default state', () => {
        const globalState = getGlobalState()
        const state = manufacturersFilter.getState(globalState)
        expect(state).toEqual(manufacturersFilter.defaultState)
      })
    })

    describe('getManufacturers', () => {
      const globalState = getGlobalState()
      const state = manufacturersFilter.getManufacturers(globalState)
      expect(state).toEqual(manufacturersFilter.defaultState.manufacturers)
    })

    describe('getSelectedManufacturer', () => {
      const globalState = getGlobalState()
      const state = manufacturersFilter.getSelectedManufacturer(globalState)
      expect(state).toEqual(manufacturersFilter.defaultState.selectedManufacturer)
    })

    describe('isFetching', () => {
      const globalState = getGlobalState()
      const state = manufacturersFilter.isFetching(globalState)
      expect(state).toEqual(manufacturersFilter.defaultState.fetching)
    })

    describe('getError', () => {
      const globalState = getGlobalState()
      const state = manufacturersFilter.getError(globalState)
      expect(state).toEqual(manufacturersFilter.defaultState.error)
    })
  })

  describe('Reducer', () => {
    describe('setError', () => {
      test('Should set the `error` property', () => {
        const error = 'Error'
        const newState = manufacturersFilter.default(
          manufacturersFilter.defaultState,
          manufacturersFilter.setError(error)
        )

        expect(newState.error).toEqual(error)
      })
    })

    describe('setFetching', () => {
      test('Should set the `fetching` property', () => {
        const newState = manufacturersFilter.default(
          manufacturersFilter.defaultState,
          manufacturersFilter.setFetching(true)
        )

        expect(newState.fetching).toEqual(true)
      })
    })

    describe('setManufacturers', () => {
      test('Should set the `manufacturers` property', () => {
        const newState = manufacturersFilter.default(
          manufacturersFilter.defaultState,
          manufacturersFilter.setManufacturers(MOCK_MANUFACTURERS)
        )

        const expectedValue = MOCK_MANUFACTURERS.map(val => val.name)

        expect(newState.manufacturers).toEqual(expectedValue)
      })
    })

    describe('selectManufacturer', () => {
      test('Should set the `selectedManufacturer` property', () => {
        const manufacturer = MOCK_MANUFACTURERS[0].name
        const newState = manufacturersFilter.default(
          manufacturersFilter.defaultState,
          manufacturersFilter.selectManufacturer(manufacturer)
        )

        expect(newState.selectedManufacturer).toEqual(manufacturer)
      })
    })
  })
})
