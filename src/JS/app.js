// Here we make Routing between pages
import '../CSS/app.css';
import Card from './Components/card.jsx';
import Home from './Pages/home.jsx';
import Error404 from './Pages/404';
import PokeDetails from './Pages/pokeDetails.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='app-container'>
    <BrowserRouter>
      <div className="main-content">
        <h1 className='pokedex-title'>Pokedex</h1>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/PokemonDetails' element={<PokeDetails />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
