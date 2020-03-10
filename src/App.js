import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Design from './Components/Design';
import Development from './Components/Development';
import Photography from './Components/Photography';
import Footer from './Components/Footer';
import EyeC from './Components/Cases/EyeC';
import GTF from './Components/Cases/GTF';
import Aoi from './Components/Cases/Aoi';
import Avenue from './Components/Cases/Avenue';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route component={Header} />
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/design" component={Design} />
              <Route path="/development" component={Development} />
              <Route path="/photography" component={Photography} />
              <Route path="/cases/avenue" component={Avenue} />
              <Route path="/cases/eyec" component={EyeC} />
              <Route path="/cases/gtf" component={GTF} />
              <Route path="/cases/aoi" component={Aoi} />
            </Switch>
          </main>
        <Route component={Footer} />
      </BrowserRouter>
    </div>
  );
}

export default App;