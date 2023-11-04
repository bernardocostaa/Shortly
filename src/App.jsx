import React from 'react';
import "./app.css"
import { Menu } from './menu/Menu';
import Header from './header/Header';
import ShortemCard from './shortenCard/ShortemCard';

const App = () => {
  return (
    <>
    <header>
      <Menu />
      <Header />
    </header>
    <main>
      <ShortemCard />
    </main>
    </>
  )
};

export default App;
