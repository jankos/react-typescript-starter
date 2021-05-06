import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './index.css';

import Heading from './components/atoms/Heading/Heading';

const App = () => {
  return (
    <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-2">
      <header className="col-span-4 md:col-span-8 lg:col-span-12">
        <Heading text='Hello!' />
      </header>
      <main className="col-span-4 md:col-span-8 lg:col-span-12">
        <Router>
          <Switch>
          <Route path="/products">
              <h1>Products</h1>
            </Route>
            <Route path="/about">
              <h1>About</h1>
            </Route>
            <Route path="/register">
              <h1>Register</h1>
            </Route>
            <Route path="/">
              <h1>Home</h1>
            </Route>
          </Switch>
        </Router>
      </main>
      <footer className="col-span-4 md:col-span-8 lg:col-span-12">
        &copy; 2021 Jan Kos Acc
      </footer>
    </div>
  );
};

export default App;
