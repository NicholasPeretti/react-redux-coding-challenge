import DuckTest from '../../../utils/tests/duck'
import * as colorsFilter from '../colorsFilter'
import { getGlobalState } from '../../../utils/tests/reducer'
import { Colors as MOCK_COLORS } from '../../../utils/tests/data'

describe('Colors Filter', () => {
  DuckTest(colorsFilter)

  test('defaultState should match snapshot', () => {
    expect(colorsFilter.defaultState).toMatchSnapshot()
  })

  describe('Action creators', () => {
    describe('setColors', () => {
      test('Should have the correct type', () => {
        const action = colorsFilter.setColors()
        expect(action.type).toEqual(colorsFilter.SET_COLORS)
      })

      test('Should have the correct value', () => {
        const action = colorsFilter.setColors(MOCK_COLORS)
        expect(action.colors).toEqual(MOCK_COLORS)
      })
    })

    describe('selectColor', () => {
      test('Should have the correct type', () => {
        const action = colorsFilter.selectColor()
        expect(action.type).toEqual(colorsFilter.SELECT_COLOR)
      })

      test('Should have the correct value', () => {
        const color = MOCK_COLORS[0]
        const action = colorsFilter.selectColor(color)
        expect(action.color).toEqual(color)
      })
    })

    describe('setError', () => {
      test('Should have the correct type', () => {
        const action = colorsFilter.setError()
        expect(action.type).toEqual(colorsFilter.SET_ERROR)
      })

      test('Should have the correct value', () => {
        const error = 'Error'
        const action = colorsFilter.setError(error)
        expect(action.error).toEqual(error)
      })
    })
  })

  describe('Selectors', () => {
    describe('getState', () => {
      test('Should return the default state', () => {
        const globalState = getGlobalState()
        const state = colorsFilter.getState(globalState)
        expect(state).toEqual(colorsFilter.defaultState)
      })
    })

    describe('isFetching', () => {
      const globalState = getGlobalState()
      const state = colorsFilter.isFetching(globalState)
      expect(state).toEqual(colorsFilter.defaultState.fetching)
    })

    describe('getError', () => {
      const globalState = getGlobalState()
      const state = colorsFilter.getError(globalState)
      expect(state).toEqual(colorsFilter.defaultState.error)
    })

    describe('getColors', () => {
      const globalState = getGlobalState()
      const state = colorsFilter.getColors(globalState)
      expect(state).toEqual(colorsFilter.defaultState.colors)
    })

    describe('getSelectedColor', () => {
      const globalState = getGlobalState()
      const state = colorsFilter.getSelectedColor(globalState)
      expect(state).toEqual(colorsFilter.defaultState.selectedColor)
    })
  })

  describe('Reducer', () => {
    describe('setColors', () => {
      test('Should set colors', () => {
        const newState = colorsFilter.default(
          colorsFilter.defaultState,
          colorsFilter.setColors(MOCK_COLORS)
        )

        expect(newState.colors).toEqual(MOCK_COLORS)
      })
    })

    describe('selectColor', () => {
      test('Should set the `selectedColor` property', () => {
        const color = MOCK_COLORS[0]
        const newState = colorsFilter.default(
          colorsFilter.defaultState,
          colorsFilter.selectColor(color)
        )

        expect(newState.selectedColor).toEqual(color)
      })
    })

    describe('setError', () => {
      test('Should set the `error` property', () => {
        const error = 'Error'
        const newState = colorsFilter.default(
          colorsFilter.defaultState,
          colorsFilter.setError(error)
        )

        expect(newState.error).toEqual(error)
      })
    })
  })
})
