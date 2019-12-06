import React from 'react';
import { HelloLazyWorld } from 'components/LazyComponents';
import { includeHotReloadCapabilities } from 'utils/dev';
import logo from 'static/logo.svg';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
      <HelloLazyWorld />
    </header>
  </div>
);

export default includeHotReloadCapabilities(App);
