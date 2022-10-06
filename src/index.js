import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import './api/server'

import store from './store'

console.log("Initial state: ", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("State after dispatch: ", store.getState())
)

store.dispatch({ type: "todos/todoAdded", payload: "Learn about actions"});
store.dispatch({ type: "todos/todoAdded", payload: "Learn about reducers"});
store.dispatch({ type: "todos/todoAdded", payload: "Learn about stores"});

store.dispatch({ type: "todos/todoToggled", payload: 0});
store.dispatch({ type: "todos/todoToggled", payload: 1});

store.dispatch({ type: "filters/statusFilterChanged", payload: 'Active'});

store.dispatch({ 
  type: "filters/colorFilterChanged", 
  payload: {color: "red", changeType: "added"}
});

unsubscribe();

store.dispatch({type: "todos/todoAdded", payload: "Try creating a store"});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
