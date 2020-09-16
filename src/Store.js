import React, { createContext, useReducer } from "react";
import io from "socket.io-client";

export const ctx = React.createContext();

export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";

const initState = {
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
      console.log('four')
      return {
        ...state,
        [topic]: [...state[topic], {from, text} ]
      }

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

  const [allChats, dispatch] = useReducer(reducer, initState);

  if (!socket) {
    socket = io(":3004");
    socket.on("chat message", function (msg) {
      console.log('three');
      dispatch({ type: RECEIVE_MESSAGE, payload: msg });
    });
  }
  let user = "Dima" + Math.random(100).toFixed(2);
  return (
    <ctx.Provider value={{ allChats, sendChatAction, user }}>
      {props.children}
    </ctx.Provider>
  );
}
export default Store;
