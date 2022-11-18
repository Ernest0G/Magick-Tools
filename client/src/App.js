import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Routes as Switch } from 'react-router-dom'

import { Home } from './pages/index';
import { Navigation } from './components/index';

const App = () => {
  return (
    <div>
      {<Navigation />}
      <Home />
    </div>
  )
}

export default App
