import React from 'react';

import ShoppingList from './components/ShoppingList'
import ItemModal from './components/ItemModal'
import './App.css';

import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>MERN CRUD</h1>
        <ItemModal />
        <ShoppingList />
      </div>
    </Provider>
  )
}

export default App;
