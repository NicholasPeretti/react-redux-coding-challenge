export default reducer => {
  describe('Reducer generic tests', () => {
    test('Should be a function', () => {
      expect(typeof reducer).toBe('function')
    })
    test('Should return an Object if called without params', () => {
      expect(typeof reducer()).toBe('object')
    })
    test('Should not change the state if called without action', () => {
      let defaultState = reducer()
      expect(
        reducer(defaultState)
      ).toEqual(defaultState)
    })
  })
}
