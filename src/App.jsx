import { useState } from 'react';
import './App.css';
import { PokemonCard } from './components/PokemonCard';
import { NavBar } from './components/NavBar';

const pokemonList = [
  {
    name: 'Bulbasaur',
    imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
  },
  {
    name: 'Mew',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/sh/thumb/b/bf/Mew.png/640px-Mew.png',
  },
  {
    name: 'Charmander',
    imgSrc: 'https://www.pngmart.com/files/13/Pokemon-Charmander-PNG-Pic.png',
  },
  {
    name: 'Squirtle',
    imgSrc: 'https://www.waouo.com/wp-content/uploads/2011/09/carapucepokemon.png',
  },
  {
    name: 'Pikachu',
    imgSrc: 'https://www.pngall.com/wp-content/uploads/5/Pokemon-Pikachu-PNG.png',
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  return (
    <div>
      <NavBar pokemonList={pokemonList} setPokemonIndex={setPokemonIndex} />
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </div>
  );
}

export default App;
