import React from 'react'
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
  <AppContainer>
    <Navbar />
    <StyledMain>
    </StyledMain>
    <Footer />
  </AppContainer>
)

export default App
