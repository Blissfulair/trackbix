import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './pages/home';
import Feature from './pages/feature';
import Support from './pages/support';
import Header from './component/header';
import Footer from './component/footer';
import About from './pages/about';


function App() {
  return (
    <div className="App">
      <Router>
        <Header title="Trackbiz"/>
        <Switch>
          <Route path="/features">
            <Feature/>
          </Route>
          <Route path="/support">
            <Support/>
          </Route>
          <Route path="/about us">
            <About/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>

        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
