// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
import reduxPromise from 'redux-promise';
// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

const initialState = {
  messages: [
  {
    "author":"anonymous92",
    "content":"Hello world!",
    "created_at":"2017-09-26T23:03:16.365Z"
  },
  {
    "author":"anonymous77",
    "content":"My name is anonymous77",
    "created_at":"2017-09-26T23:03:21.194Z"
  }
], 
  channels: ["general", "react", "shanghai"], 
  selectedChannel: "general", 
  currentUser: "Maria"
  // currentUser: prompt("What is your username?") || "anonymous" 
};


import messagesReducer from './reducers/messagesReducer.js';
import channelsReducer from './reducers/channelsReducer.js';
import selectedChannelReducer from './reducers/selectedChannelReducer.js';
import currentUserReducer from './reducers/currentUserReducer.js';

// State and reducers
const reducers = combineReducers({
  messages: messagesReducer, 
  channels: channelsReducer, 
  selectedChannel: selectedChannelReducer, 
  currentUser: currentUserReducer
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, applyMiddleware(logger, reduxPromise))}>
    <App />
  </Provider>,
  document.getElementById('root')
);
