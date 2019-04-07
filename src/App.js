import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Posts from './components/Posts';
import PrivateRoute from './PrivateRoute';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
            <Nav />
            <Switch>
                <Route path="/" exact render={ () => <Home name="Shohan" /> }/>
                <Route path="/about" component={ About }/>
                <Route path="/contact" component={ Contact }/>
                <PrivateRoute path="/posts/:postId" component={ Posts }/>
                <Route path="/login" component={ Login }/>
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
