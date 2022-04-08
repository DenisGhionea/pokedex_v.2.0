import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './CSS/Pages/home.jsx';
import Layout from './JS/Components/layout.jsx';
import CardsPage from './JS/Pages/cardsPage.jsx';
import NotFound from './JS/Pages/notFound.jsx';
import PokeDetails from './JS/Pages/pokeDetails.jsx';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>  
        <Routes>
          <Route index element={<CardsPage />} />
          <Route path='/' element={<CardsPage />} />
          <Route path='pokemon/:pokemonId' element={<PokeDetails />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
