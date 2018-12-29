import { Map } from 'immutable'

export const NAMESPACE = 'COLOR_FILTER'
export const SET_COLORS = `${NAMESPACE} SET_COLORS`
export const SELECT_COLOR = `${NAMESPACE} SELECT_COLOR`

export const setColors = colors => ({
  type: SET_COLORS,
  colors
})

export const selectColor = color => ({
  type: SELECT_COLOR,
  color
})

export const defaultState = {
  selectedColor: null,
  colors: [],
  colorsMap: new Map()
}

export default function reducer (state = defaultState, action = {}) {
  switch (action.type) {
    case SET_COLORS: {
      state.colorsMap = new Map()
      action.colors.forEach(color => {
        state.colorsMap = state.colorsMap.set(
          color, color
        )
      })

      state = Object.assign({}, state, {
        colors: state.colorsMap.reduce((colors, v) => colors.concat([v]), [])
      })
      break
    }

    case SELECT_COLOR: {
      state = Object.assign({}, state, {
        selectedColor: action.color
      })
      break
    }
  }

  return state
}
