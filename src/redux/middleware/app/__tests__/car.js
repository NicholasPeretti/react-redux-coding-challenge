import MiddlewareTest, { createMockStore } from '../../../../utils/tests/middleware'
import { getGlobalState } from '../../../../utils/tests/reducer'
import { isApiAction, apiSuccess, apiError } from '../../core/api'
import { NAMESPACE, setFetching, setError, setCar } from '../../../ducks/car'
import * as Car from '../car'
import { CarsList } from '../../../../utils/tests/data'
const MOCK_CAR = CarsList[0]
const middleware = Car.default
var mockStore = null

describe('Car', () => {
  MiddlewareTest(middleware)

  describe('Action creators', () => {
    describe('fetchCar', () => {
      test('Should return an apiRequest action', () => {
        const action = Car.fetchCar()
        expect(isApiAction(action)).toBe(true)
      })

      test('Shoud return an apiRequest action with the correct namespace', () => {
        const action = Car.fetchCar()
        expect(isApiAction(action, NAMESPACE)).toBe(true)
      })
    })
  })

  describe('Middleware', () => {
    beforeEach(() => {
      mockStore = createMockStore(middleware, getGlobalState())
    })

    describe('On FetchCar', () => {
      test('Should call setFetching(true)', () => {
        const { next, invoke } = mockStore
        invoke(Car.fetchCar(MOCK_CAR.stockNumber))

        expect(next).toHaveBeenCalledWith(
          setFetching(true)
        )
      })

      test('Should call setError(null)', () => {
        const { next, invoke } = mockStore
        invoke(Car.fetchCar(MOCK_CAR.stockNumber))

        expect(next).toHaveBeenCalledWith(
          setError(null)
        )
      })
    })

    describe('On API_SUCCESS', () => {
      test('Should call setFetching(false)', () => {
        const { next, invoke } = mockStore
        invoke(apiSuccess({ car: MOCK_CAR }, NAMESPACE))

        expect(next).toHaveBeenCalledWith(
          setFetching(false)
        )
      })

      test('Should call setCar(false)', () => {
        const { next, invoke } = mockStore
        invoke(apiSuccess({ car: MOCK_CAR }, NAMESPACE))

        expect(next).toHaveBeenCalledWith(
          setCar(MOCK_CAR)
        )
      })
    })

    describe('On API_ERROR', () => {
      test('Should call setFetching(false)', () => {
        const { next, invoke } = mockStore
        const error = 'error'
        invoke(apiError(error, NAMESPACE))

        expect(next).toHaveBeenCalledWith(
          setFetching(false)
        )
      })

      test('Should call setCar(false)', () => {
        const { next, invoke } = mockStore
        const error = 'error'
        invoke(apiError(error, NAMESPACE))

        expect(next).toHaveBeenCalledWith(
          setError(error)
        )
      })
    })
  })
})
