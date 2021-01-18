import React, { createContext, useReducer } from "react";
import io from "socket.io-client";

import userJoin from './actionCreator'

export const ctx = createContext();

const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
const NEW_USER = 'NEW_USER'

const initialState = {

  users: [], 

  general: [
    { from: "Dimka", text: "Hello" },
  ],

  topic2: [
    { from: "Dimka", text: "Hello" },
  ],
};

const reducer = (state, action) => {
  const {from, text, topic } = action.payload;
  const { type } = action;
  
  switch (type) {
    case RECEIVE_MESSAGE:
      console.log('four', from, text, topic )
      return {
        ...state,
        [topic]: [...state[topic].push({from, text}) ]
      }

    // case NEW_USER:


    default:
      return state; 
  }
}

let socket;

const sendChatAction = (msg) => {
  console.log('one')
  socket.emit("chat message", msg);
}

function Store(props) {
  // let i = 0;
  // setInterval(() => {
  //   console.log(i)
  //   i+=1
  // }, 2000);

  const [allChats, dispatch] = useReducer(reducer, initialState);

  if (!socket) {
    socket = io(":3004");
    socket.on("chat message", (msg) => {
      console.log('three', dispatch);
      dispatch({ type: RECEIVE_MESSAGE, payload: msg });
    });
  }
  let user = "user" + Math.random(100).toFixed(2);
  return (
    <ctx.Provider value={{ allChats, sendChatAction, userJoin }}>
      {props.children}
    </ctx.Provider>
  );
}
export default Store;
