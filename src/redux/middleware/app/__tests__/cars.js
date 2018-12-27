import * as Cars from '../cars'
import { isApiAction, apiSuccess, apiError } from '../../core/api'
import { NAMESPACE, setFetching, setPage, setCars, setResultsCount, setError } from '../../../ducks/cars'
import MiddlewareTest, { createMockStore } from '../../../../utils/tests/middleware'
const middleware = Cars.default
var mockStore = null

describe('Cars', () => {
  MiddlewareTest(middleware)

  describe('Actions creators', () => {
    describe('fetchPage', () => {
      test('Should return an apiRequest action', () => {
        const action = Cars.fetchPage()
        expect(isApiAction(action)).toBe(true)
      })

      test('Shoud return an apiRequest action with the correct namespace', () => {
        const action = Cars.fetchPage()
        expect(isApiAction(action, NAMESPACE)).toBe(true)
      })

      test('Should fetch page 1 if no arguments are provided', () => {
        const action = Cars.fetchPage()
        expect(action.payload.page).toBe(1)
      })
    })
  })

  describe('Middleware', () => {
    beforeEach(() => {
      mockStore = createMockStore(middleware)
    })

    describe('On fetchPage', () => {
      test('Should dispatch setFetching(true)', () => {
        const { next, invoke } = mockStore
        const action = Cars.fetchPage(5)
        const setFetchingAction = setFetching(true)

        invoke(action)
        expect(next).toHaveBeenCalled()
        expect(next).toHaveBeenCalledWith(setFetchingAction)
      })

      test('Should dispatch setPage()', () => {
        const { next, invoke } = mockStore
        const page = 5
        const action = Cars.fetchPage(page)
        const setPageAction = setPage(page)

        invoke(action)
        expect(next).toHaveBeenCalled()
        expect(next).toHaveBeenCalledWith(setPageAction)
      })
    })

    describe('On API_SUCCESS', () => {
      test('Should dispatch setFetching(false)', () => {
        const { next, invoke } = mockStore
        const action = apiSuccess({}, NAMESPACE)
        const setFetchingAction = setFetching(false)

        invoke(action)
        expect(next).toHaveBeenCalled()
        expect(next).toHaveBeenCalledWith(setFetchingAction)
      })

      test('Should dispatch setCars()', () => {
        const { next, invoke } = mockStore
        const cars = []
        const action = apiSuccess({ cars }, NAMESPACE)
        const setCarsAction = setCars(cars)

        invoke(action)
        expect(next).toHaveBeenCalled()
        expect(next).toHaveBeenCalledWith(setCarsAction)
      })

      test('Should dispatch setResultsCount()', () => {
        const { next, invoke } = mockStore
        const resultsCount = 4
        const action = apiSuccess({ totalPageCount: resultsCount }, NAMESPACE)
        const setResultsCountAction = setResultsCount(resultsCount)

        invoke(action)
        expect(next).toHaveBeenCalled()
        expect(next).toHaveBeenCalledWith(setResultsCountAction)
      })
    })

    describe('On API_ERROR', () => {
      test('Should dispatch setFetching(false)', () => {
        const { next, invoke } = mockStore
        const action = apiSuccess({}, NAMESPACE)
        const setFetchingAction = setFetching(false)

        invoke(action)
        expect(next).toHaveBeenCalled()
        expect(next).toHaveBeenCalledWith(setFetchingAction)
      })

      test('Should dispatch setError()', () => {
        const { next, invoke } = mockStore
        const error = 'Random error'
        const action = apiError(error, NAMESPACE)
        const setErrorAction = setError(error)

        invoke(action)
        expect(next).toHaveBeenCalled()
        expect(next).toHaveBeenCalledWith(setErrorAction)
      })
    })
  })
})
