import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import Style from './style'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Container from './components/Container'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PageNotFound from './screens/PageNotFound'
import CarsSearch from './screens/CarsSearch'
import CarDetails from './screens/CarDetails'

const AppContainer = styled.div`
  color: ${Style.colors.textColor};
`
const StyledMain = styled.main`
  min-height: ${window.innerHeight - 165}px;
  margin-top: ${Style.spacing.padding3}
`

const App = () => (
  <Provider store={store}>
    <AppContainer>
      <Navbar />
      <StyledMain>
        <Container>
          <BrowserRouter>
            <Switch>
              <Route path='/' exact component={CarsSearch} />
              <Route path='/:stockNumber' exact component={CarDetails} />
              <Route component={PageNotFound} />
            </Switch>
          </BrowserRouter>
        </Container>
      </StyledMain>
      <Footer />
    </AppContainer>
  </Provider>
)

export default App
