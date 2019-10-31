import React from 'react';

import ShoppingList from './components/ShoppingList/ShoppingList'
import H1 from './components/ui/H1/H1'
import BrandLogo from './components/ui/BrandLogo/BrandLogo'
import Footer from './components/Footer/Footer'
import './App.css';

/* Redux */
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="Wrap">
        <div className="App">
          <H1 textAlign="center">MERN</H1>
          <ShoppingList />
        </div>
        <Footer>
          <BrandLogo />
        </Footer>
      </div>
    </Provider>
  )
}

export default App;
