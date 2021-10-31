import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { GlobalStyles } from 'styles/globalStyles'
import * as S from './AppStyles'
import Navigation from 'components/common/header/navigation'
import Home from 'pages/home'
import Destination from 'pages/destination'
import Crew from 'pages/crew'
import Technology from 'pages/technology'

function App() {
  const [path, setPath] = React.useState(window.location.pathname)
  const handlePath = (currentPath: string) => {
    console.log(path)

    setPath(currentPath)
  }

  return (
    <>
      <GlobalStyles />
      <S.PageWrapper currentPage={path}>
        <Router>
          <Navigation />
          <Route exact path="/">
            <Home onPath={handlePath} />
          </Route>
          <Route exact path="/destination">
            <Destination onPath={handlePath} />
          </Route>
          <Route exact path="/crew">
            <Crew onPath={handlePath} />
          </Route>
          <Route exact path="/technology">
            <Technology onPath={handlePath} />
          </Route>
        </Router>
      </S.PageWrapper>
    </>
  )
}

export default App
