import React from 'react';

import ShoppingList from './components/ShoppingList/ShoppingList'
import Spinner from './components/ui/Spinner/Spinner'
import H1 from './components/ui/H1/H1'
import './App.css';

/* Redux */
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/*<Spinner />*/}
        <H1 textAlign="center">MERN</H1>
        <ShoppingList />
      </div>
    </Provider>
  )
}

export default App;
