import { useState } from 'react';
import './App.css';
import { PokemonCard } from './components/PokemonCard';

const pokemonList = [
  {
    name: 'Bulbasaur',
    imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
  },
  {
    name: 'Mew',
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
  return (
    <div>
      <PokemonCard pokemon={pokemonList[4]} />
    </div>
  );
}

export default App;
