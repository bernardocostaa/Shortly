import React from 'react';
import "./app.css"
import { Menu } from './menu/Menu';
import Header from './header/Header';

const App = () => {
  return (
    <header>
      <Menu />
      <Header />
    </header>
  )
};

export default App;
