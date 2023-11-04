import React from 'react';
import "./app.css"
import { Menu } from './menu/Menu';
import Header from './header/Header';
import ShortemCard from './shortenCard/ShortemCard';
import Advanced from './advanced/Advanced';

const App = () => {
  return (
    <>
    <header>
      <Menu />
      <Header />
    </header>
    <main className='bg-color'>
      <ShortemCard />
      <Advanced />
    </main>
    </>
  )
};

export default App;
