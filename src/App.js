import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './Components/Header'
import SingleHero from './Components/SingleHero'
import HeroesList from './Components/HeroesList'
import Attribution from './Components/Attribution'
import NotFound from './Components/Utils/NotFound'
import { GlobalStyle } from './Styles/GlobalStyle'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={HeroesList} />
        <Route exact path='/hero/:id' component={SingleHero} />
        <Route exact path='/attribution' component={Attribution} />
        <Route path='*' component={NotFound} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App
