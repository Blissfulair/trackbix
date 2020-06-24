import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import './../src/css/fonts.css'
import Home from './pages/home';
import Pricing from './pages/pricing';
import Support from './pages/support';
import Header from './component/header';
import Footer from './component/footer';
import About from './pages/about';
import ScrollToTop from './component/scrolltotop';


function App() {
  const title = "TrackBiz"
  return (
    <div className="App">
      <Router>
        <Header title={title}/>
          <ScrollToTop>
          <Switch>
          <Route path="/pricing">
            <Pricing/>
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
          </ScrollToTop>
        <Footer title={title}/>
      </Router>
    </div>
  );
}

export default App;
