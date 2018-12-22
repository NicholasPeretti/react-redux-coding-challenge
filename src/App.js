import React from 'react'
import StyleContext from './styleContext'
import style from './style'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => (
  <StyleContext.Provider value={style}>
    <StyleContext.Consumer>
      {context => (
        <div
          style={{
            color: context.colors.textColor
          }}
        >
          <Navbar />
          <main
            style={{
              minHeight: window.innerHeight - 165
            }}
          />
          <Footer />
        </div>
      )}
    </StyleContext.Consumer>
  </StyleContext.Provider>
)

export default App
