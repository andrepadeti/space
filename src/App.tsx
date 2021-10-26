import { GlobalStyles } from 'styles/globalStyles'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from 'components/common/header/navigation'
import Home from 'pages/home'
import Destination from 'pages/destination'

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
      </Router>
    </>
  )
}

export default App
