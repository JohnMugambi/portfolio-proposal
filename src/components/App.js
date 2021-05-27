import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Homepage.css'
import HomePage from './HomePage';
import {Route, Switch} from 'react-router-dom';
import NotFoundPage  from "./NotFoundPage";
import Portfolio from "./pages/Portfolio";
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Display from './pages/Display';
import Header from './common/HeaderNav';

import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import './App.css'
// import MainPageApp from './main/MainPageApp';

function App() {
  return (
    <>
      <Header />
      <Route render={({location})=>(
        <TransitionGroup>
          <CSSTransition timeout={450} classNames="fade" key={location.key}>
            <Switch location={location}>
              <Route path="/" exact component={HomePage}/>
              <Route path="/portfolio" component={Portfolio}/>
              <Route path="/about" component={AboutPage}/>
              <Route path="/contact" component={ContactPage}/>
              <Route path="/:category" component={Display} />
              <Route component={NotFoundPage} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}/>
          
    </>
  );
}

export default App;
