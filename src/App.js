import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import Style from './style'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const AppContainer = styled.div`
  color: ${Style.colors.textColor};
`
const StyledMain = styled.main`
  min-height: ${window.innerHeight - 165}px;
`

const App = () => (
  <Provider store={store}>
    <AppContainer>
      <Navbar />
      <StyledMain>
      </StyledMain>
      <Footer />
    </AppContainer>
  </Provider>
)

export default App
