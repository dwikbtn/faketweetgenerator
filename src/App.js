import React from 'react';
import LandingPage from 'pages/LandingPage';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './assets/scss/main.scss'



function App() {
  return (
    <div className="app">
      <Router>
        <Route path="/" component={LandingPage}></Route>
      </Router>
    </div>
  );
}

export default App;
