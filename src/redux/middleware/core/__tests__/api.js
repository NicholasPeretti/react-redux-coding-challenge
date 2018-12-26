import * as api from '../api'
import MiddlewareTest from '../../../../utils/tests/middleware'
import configureStore from 'redux-mock-store'

const middleware = api.default
const createMockStore = configureStore([middleware])
const MOCK_URL = 'MOCK_URL'
const MOCK_METHOD = 'GET'
const MOCK_NAMESPACE = 'MOCK_NAMESPACE'
const MOCK_PARAMS = {
  MOCK_PARAM: 'MOCK_PARAM'
}
const MOCK_DATA = [
  {
    key: 'val'
  }
]
const MOCK_ERROR = 'MOCK_ERROR'

describe('api', () => {
  describe('Middleware', () => {
    MiddlewareTest(middleware)

    describe('Behaviour', () => {
      beforeEach(() => {
        fetch.resetMocks()
      })

      test('Should emit apiSuccess when fetched succefully', (done) => {
        expect.assertions(2)
        fetch.mockResponse(JSON.stringify(MOCK_DATA))
        const store = createMockStore()

        store.dispatch(api.apiRequest('a', MOCK_METHOD, MOCK_NAMESPACE))

        setTimeout(() => {
          const actions = store.getActions()
          const lastAction = actions[actions.length - 1]
          expect(actions.length).toEqual(2)
          expect(lastAction).toEqual(
            api.apiSuccess(MOCK_DATA, MOCK_NAMESPACE)
          )
          done()
        })
      })

      test('Should emit apiError when `fetch` throws an error', (done) => {
        expect.assertions(2)
        fetch.mockRejectOnce(MOCK_ERROR)
        const store = createMockStore()

        store.dispatch(api.apiRequest('a', MOCK_METHOD, MOCK_NAMESPACE))

        setTimeout(() => {
          const actions = store.getActions()
          const lastAction = actions[actions.length - 1]
          expect(actions.length).toEqual(2)
          expect(lastAction).toEqual(
            api.apiError(MOCK_ERROR, MOCK_NAMESPACE)
          )
          done()
        })
      })
    })
  })

  describe('Actions creators', () => {
    test('apiRequest', () => {
      expect(
        api.apiRequest(MOCK_URL, MOCK_METHOD, MOCK_NAMESPACE, MOCK_PARAMS)
      ).toEqual({
        type: api.API_REQUEST,
        payload: MOCK_PARAMS,
        meta: {
          url: MOCK_URL,
          method: MOCK_METHOD,
          namespace: MOCK_NAMESPACE
        }
      })
    })

    test('apiSuccess', () => {
      expect(api.apiSuccess(MOCK_DATA, MOCK_NAMESPACE)).toEqual({
        type: api.API_SUCCESS,
        payload: MOCK_DATA,
        meta: {
          namespace: MOCK_NAMESPACE
        }
      })
    })

    test('apiError', () => {
      expect(api.apiError(MOCK_DATA, MOCK_NAMESPACE)).toEqual({
        type: api.API_ERROR,
        payload: MOCK_DATA,
        meta: {
          namespace: MOCK_NAMESPACE
        }
      })
    })
  })

  describe('isApiAction', () => {
    test('Should be a function', () => {
      expect(typeof api.isApiAction).toEqual('function')
    })

    test('Should return true with all the action creators', () => {
      const requestAction = api.apiRequest(MOCK_URL, MOCK_METHOD, MOCK_NAMESPACE)
      const successAction = api.apiSuccess(MOCK_DATA, MOCK_NAMESPACE)
      const errorAction = api.apiError(MOCK_DATA, MOCK_NAMESPACE)

      expect(api.isApiAction(requestAction)).toEqual(true)
      expect(api.isApiAction(successAction)).toEqual(true)
      expect(api.isApiAction(errorAction)).toEqual(true)
    })

    test('Should return false when the action.type an api action', () => {
      let fakeAction = api.apiSuccess(MOCK_DATA, MOCK_NAMESPACE)
      fakeAction.type = 'WRONG_ACTION_TYPE'
      expect(api.isApiAction(fakeAction)).toBe(false)
    })

    test('With the namespace param, it should check the action namespace', () => {
      const requestAction = api.apiRequest(MOCK_URL, MOCK_METHOD, MOCK_NAMESPACE)
      expect(api.isApiAction(requestAction, 'RANDOM_NAMESPACE')).toBe(false)
      expect(api.isApiAction(requestAction, MOCK_NAMESPACE)).toBe(true)
    })
  })
})
