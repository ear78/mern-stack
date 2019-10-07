import React from 'react';

import ShoppingList from './components/ShoppingList'
import Spinner from './components/ui/Spinner/Spinner'
import './App.css';

/* Redux */
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Spinner />
        <h1>MERN CRUD</h1>
        <ShoppingList />
      </div>
    </Provider>
  )
}

export default App;
