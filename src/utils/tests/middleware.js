export const createMockStore = (middleware) => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn()
  }
  const next = jest.fn()

  const invoke = action => middleware(store)(next)(action)

  return { store, next, invoke }
}

export default middleware => {
  describe('Middleware generic tests', () => {
    test('Should be a function', () => {
      expect(typeof middleware).toBe('function')
    })

    test('Should return a function', () => {
      expect(typeof middleware()).toBe('function')
    })

    test('Should return a fn that returns a fn', () => {
      expect(typeof middleware()()).toBe('function')
    })

    test('Should call the original dispatch fn', () => {
      let MOCK_ACTION = { type: 'MOCK_ACTION' }
      let { next, invoke } = createMockStore(middleware)

      invoke(MOCK_ACTION)
      expect(next).toHaveBeenCalled()
    })
  })
}
