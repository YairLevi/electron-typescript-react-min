import React from 'react';
import logo_react from './logo-react.svg';
import logo_electron from './logo-electron.svg';
import './App.css';

function App() {
  const electronVersion = window.versions.electron()

  return (
    <div className="App">
      <header className="App-header">
        <p className="logo-header">
          <img src={logo_react} className="App-logo" alt="logo"/>
          <img src={logo_electron} className="App-logo" alt="logo"/>
        </p>
        <p>
          <code>Electron, ReactJS, TypeScript</code>
        </p>
        <p>Electron Version is {electronVersion}</p>
        <a
          className="App-link"
          href="https://github.com/YairLevi/electron-typescript-react-min"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Link
        </a>
      </header>
    </div>
  );
}

export default App;