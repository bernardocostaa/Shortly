import React from 'react';
import "./app.css"
import { Menu } from './menu/Menu';
import Header from './header/Header';
import ShortemCard from './shortenCard/ShortemCard';
import Advanced from './advanced/Advanced';
import Boost from './boost/Boost';
import Footer from './footer/Footer';
import CardLink from './shortenCard/CardLink';
import ParentComponent from './shortenCard/ParentComponent';

const App = () => {
  return (
    <>
    <header>
      <Menu />
      <Header />
    </header>
    <main className='bg-color'>
     <ParentComponent />
      <Advanced />
      <Boost />
    </main>
    <Footer />
    </>
  )
};

export default App;
