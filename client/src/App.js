import React from 'react';

import ShoppingList from './components/ShoppingList'
import './App.css';

import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>MERN CRUD</h1>
        <ShoppingList />
      </div>
    </Provider>
  )
}

export default App;
