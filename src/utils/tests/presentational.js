import React from 'react'
import ReactDOM from 'react-dom'

export default (Component, props) => {
  describe('Presentational component generic tests', () => {
    test('Should render without creashing', () => {
      const div = document.createElement('div')
      ReactDOM.render(
        <Component {...props}/>,
        div
      )
      ReactDOM.unmountComponentAtNode(div)
    })
  })
}
