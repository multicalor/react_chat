import React,{ Component, Fragment } from 'react';
// import logo from './logo.svg';
import './App.css';

// Component imports
import Login from './components/Login/login'
import Dashboard from './components/Dashboard/dashboard';

function App() {
  return (
    <div className="App">
      <Fragment>
        <Dashboard />
      {/* <Login /> */}
      </Fragment>
    </div>
  );
}

export default App;
