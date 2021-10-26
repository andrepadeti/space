import { GlobalStyles } from 'styles/globalStyles'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from 'components/common/header/navigation'
import Home from 'pages/home'
import Destination from 'pages/destination'
import Crew from 'pages/crew'
import Technology from 'pages/technology'

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
      <Navigation />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/destination">
          <Destination />
        </Route>
        <Route exact path="/crew">
          <Crew />
        </Route>
        <Route exact path="/technology">
          <Technology />
        </Route>
      </Router>
    </>
  )
}

export default App
