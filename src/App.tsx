import * as React from 'react'
import { Route, useLocation } from 'react-router-dom'
import useMediaQuery from 'utils/media-query-all'
import { getUrl } from 'utils/bg-img-url'

import { GlobalStyles } from 'styles/globalStyles'
import Navigation from 'components/common/header/navigation'
import Home from 'pages/home'
import Destination from 'pages/destination'
import Crew from 'pages/crew'
import Technology from 'pages/technology'

function App() {
  let location = useLocation()
  const mq = useMediaQuery()

  React.useEffect(() => {
    const url = getUrl(location.pathname, mq)
    const position =
      mq.isTablet || mq.isDesktop ? 'center center' : 'bottom center'
    document.body.style.backgroundImage = `url(${url})`
    document.body.style.backgroundSize = 'cover'
    document.body.style.backgroundPosition = position
    document.body.style.backgroundRepeat = 'no-repeat'
  }, [location, mq])

  return (
    <>
      <GlobalStyles />
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
    </>
  )
}

export default App
