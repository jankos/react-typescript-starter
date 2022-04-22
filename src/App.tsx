import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';

import Heading from './components/atoms/Heading/Heading';

const App = (): JSX.Element => {
  return (
    <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-2">
      <header className="col-span-4 md:col-span-8 lg:col-span-12">
        <Heading text='Hello!' />
      </header>
      <main className="col-span-4 md:col-span-8 lg:col-span-12">
        <Router>
          <Routes>
          <Route path="/products">
            </Route>
            <Route path="/about">
            </Route>
            <Route path="/register">
            </Route>
            <Route path="/">
            </Route>
          </Routes>
        </Router>
      </main>
      <footer className="col-span-4 md:col-span-8 lg:col-span-12">
        &copy; 2021 Jan Kos
      </footer>
    </div>
  );
};

export default App;
