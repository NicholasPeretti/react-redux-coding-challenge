import React from 'react'
import ReactDOM from 'react-dom'

export default Component => {
  describe('Presentational component generic tests', () => {
    test('Should render without creashing', () => {
      const div = document.createElement('div')
      ReactDOM.render(
        <Component/>,
        div
      )
      ReactDOM.unmountComponentAtNode(div)
    })
  })
}
