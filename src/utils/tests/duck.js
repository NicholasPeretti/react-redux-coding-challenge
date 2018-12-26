import ReducerTest from './reducer'

export default duck => {
  describe('Duck generic tests', () => {
    describe('Should export a reducer as default', () => {
      ReducerTest(duck.default)
      test('Reducer should return defaultState if called without params', () => {
        expect(duck.default()).toEqual(duck.defaultState)
      })
    })
    test('Should export defaultState', () => {
      expect(duck.defaultState).toBeTruthy()
    })
  })
}
