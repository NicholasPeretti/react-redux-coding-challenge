import * as manufacturersFilter from '../manufacturersFilter'
import MiddlewareTest, { createMockStore } from '../../../../utils/tests/middleware'
import { getGlobalState } from '../../../../utils/tests/reducer'
import { NAMESPACE, setFetching, setError, setManufacturers } from '../../../ducks/manufacturersFilter'
import { isApiAction, apiSuccess, apiError } from '../../core/api'
import { Manufacturers as MOCK_MANUFACTURERS } from '../../../../utils/tests/data'
import { fetchPage } from '../cars'
const middleware = manufacturersFilter.default
var mockStore = null

describe('manufacturersFilter', () => {
  MiddlewareTest(middleware)

  describe('Actions creators', () => {
    describe('fetchManufacturers', () => {
      test('Should return an apiRequest action', () => {
        const action = manufacturersFilter.fetchManufacturers()
        expect(isApiAction(action)).toBe(true)
      })

      test('Shoud return an apiRequest action with the correct namespace', () => {
        const action = manufacturersFilter.fetchManufacturers()
        expect(isApiAction(action, NAMESPACE)).toBe(true)
      })
    })
  })

  describe('Middleware', () => {
    beforeEach(() => {
      mockStore = createMockStore(middleware, getGlobalState())
    })

    describe('On fetchManufacturers', () => {
      test('Should dispatch setFetching(true)', () => {
        const { next, invoke } = mockStore
        const action = manufacturersFilter.fetchManufacturers()
        const setFetchingAction = setFetching(true)

        invoke(action)
        expect(next).toHaveBeenCalled()
        expect(next).toHaveBeenCalledWith(setFetchingAction)
      })

      test('Should dispatch setError(null)', () => {
        const { next, invoke } = mockStore
        const action = manufacturersFilter.fetchManufacturers()
        const setErrorAction = setError(null)

        invoke(action)
        expect(next).toHaveBeenCalled()
        expect(next).toHaveBeenCalledWith(setErrorAction)
      })
    })

    describe('On API_SUCCESS', () => {
      test('Should dispatch setFetching(false)', () => {
        const { next, invoke } = mockStore
        const action = apiSuccess({
          manufacturers: MOCK_MANUFACTURERS
        }, NAMESPACE)
        const setFetchingAction = setFetching(false)

        invoke(action)
        expect(next).toHaveBeenCalled()
        expect(next).toHaveBeenCalledWith(setFetchingAction)
      })

      test('Should dispatch setManufacturers()', () => {
        const { next, invoke } = mockStore
        const action = apiSuccess({
          manufacturers: MOCK_MANUFACTURERS
        }, NAMESPACE)
        const setManufacturersAction = setManufacturers(MOCK_MANUFACTURERS)

        invoke(action)
        expect(next).toHaveBeenCalled()
        expect(next).toHaveBeenCalledWith(setManufacturersAction)
      })
    })

    describe('On API_ERROR', () => {
      test('Should dispatch setFetching(false)', () => {
        const { next, invoke } = mockStore
        const action = apiSuccess({
          manufacturers: MOCK_MANUFACTURERS
        }, NAMESPACE)
        const setFetchingAction = setFetching(false)

        invoke(action)
        expect(next).toHaveBeenCalled()
        expect(next).toHaveBeenCalledWith(setFetchingAction)
      })

      test('Should dispatch setError()', () => {
        const error = 'Error'
        const { next, invoke } = mockStore
        const action = apiError(error, NAMESPACE)
        const setErrorAction = setError(error)

        invoke(action)
        expect(next).toHaveBeenCalled()
        expect(next).toHaveBeenCalledWith(setErrorAction)
      })
    })

    describe('On Cars.fetchPage', () => {
      test('Should fill the `manufacturer` param of the request', () => {
        const manufacturer = MOCK_MANUFACTURERS[0].name
        var globalState = Object.assign({}, getGlobalState())
        globalState[NAMESPACE].selectedManufacturer = manufacturer

        const { next, invoke } = createMockStore(middleware, globalState)
        const action = fetchPage(1)
        var expectedAction = fetchPage(1)
        expectedAction.payload.manufacturer = manufacturer

        invoke(action)
        expect(next).toHaveBeenCalled()
        expect(next).toHaveBeenCalledWith(expectedAction)
      })
    })
  })
})
