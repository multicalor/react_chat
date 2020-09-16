import React, { Component, Fragment } from "react";
// import logo from './logo.svg';
import "./App.css";

// Component imports
// import Login from "./components/Login/login";
import Dashboard from "./components/Dashboard/dashboard";
// import ChatContainer from "./containers/ChatContainer/chatContainer";
import Store from "./Store";

// const loging = (user) => {
//   if (user) {
//     login = true;
//     console.log("loging", login);
//   }
// };

function App() {
  // state = {
  //   login: true,
  // };

  // loging = (name) => {
  //   if (name) {
  //     this.setState({
  //       login: true,
  //     });
  //   }
  //   return;
  // };

  // render() {
  //   const { login } = this.state;

    return (
      <div className="App">

          {/* <Dashboard /> */}
          {/* {login ? ( */}
            {/* // <ChatContainer /> */}
            <Store>
              <Dashboard />
            </Store>
          {/* // ) : (
          //   <Login loging={this.loging} />
          // )} */}
  
      </div>
    );
  }


export default App;
