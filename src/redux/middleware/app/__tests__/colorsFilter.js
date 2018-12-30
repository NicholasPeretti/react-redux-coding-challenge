import * as colorsFilter from '../colorsFilter'
import { NAMESPACE, setFetching, setError, setColors } from '../../../ducks/colorsFilter'
import MiddlewareTest, { createMockStore } from '../../../../utils/tests/middleware'
import { getGlobalState } from '../../../../utils/tests/reducer'
import { isApiAction, apiSuccess, apiError } from '../../core/api'
import { Colors as MOCK_COLORS } from '../../../../utils/tests/data'
const middleware = colorsFilter.default
var mockStore = null

describe('colorsFilter', () => {
  MiddlewareTest(middleware)

  describe('Actions creators', () => {
    describe('fetchPage', () => {
      test('Should return an apiRequest action', () => {
        const action = colorsFilter.fetchColors()
        expect(isApiAction(action)).toBe(true)
      })

      test('Shoud return an apiRequest action with the correct namespace', () => {
        const action = colorsFilter.fetchColors()
        expect(isApiAction(action, NAMESPACE)).toBe(true)
      })
    })
  })

  describe('Middleware', () => {
    beforeEach(() => {
      mockStore = createMockStore(middleware, getGlobalState())
    })

    describe('On fetchColors', () => {
      test('Should dispatch setFetching(true)', () => {
        const { next, invoke } = mockStore
        const action = colorsFilter.fetchColors()
        const setFetchingAction = setFetching(true)

        invoke(action)
        expect(next).toHaveBeenCalled()
        expect(next).toHaveBeenCalledWith(setFetchingAction)
      })

      test('Should dispatch setError(null)', () => {
        const { next, invoke } = mockStore
        const action = colorsFilter.fetchColors()
        const setErrorAction = setError(null)

        invoke(action)
        expect(next).toHaveBeenCalled()
        expect(next).toHaveBeenCalledWith(setErrorAction)
      })
    })
  })

  describe('On API_SUCCESS', () => {
    test('Should dispatch setFetching(false)', () => {
      const { next, invoke } = mockStore
      const action = apiSuccess({ colors: MOCK_COLORS }, NAMESPACE)
      const setFetchingAction = setFetching(false)

      invoke(action)
      expect(next).toHaveBeenCalled()
      expect(next).toHaveBeenCalledWith(setFetchingAction)
    })

    test('Should dispatch setColors()', () => {
      const { next, invoke } = mockStore
      const action = apiSuccess({ colors: MOCK_COLORS }, NAMESPACE)
      const setFetchingAction = setColors(MOCK_COLORS)

      invoke(action)
      expect(next).toHaveBeenCalled()
      expect(next).toHaveBeenCalledWith(setFetchingAction)
    })
  })

  describe('On API_ERROR', () => {
    test('Should dispatch setFetching(false)', () => {
      const error = 'Error'
      const { next, invoke } = mockStore
      const action = apiError(error, NAMESPACE)
      const setFetchingAction = setFetching(false)

      invoke(action)
      expect(next).toHaveBeenCalled()
      expect(next).toHaveBeenCalledWith(setFetchingAction)
    })

    test('Should dispatch setError(error)', () => {
      const error = 'Error'
      const { next, invoke } = mockStore
      const action = apiError(error, NAMESPACE)
      const setErrorAction = setError(error)

      invoke(action)
      expect(next).toHaveBeenCalled()
      expect(next).toHaveBeenCalledWith(setErrorAction)
    })
  })
})
