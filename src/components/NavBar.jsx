export function NavBar({ pokemonIndex, pokemonList, setPokemonIndex }) {
  const increment = () => {
    setPokemonIndex(pokemonIndex + 1);
  };

  const decrement = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  return (
    <nav>
      {pokemonIndex > 0 && <button onClick={decrement}>Previous</button>}

      {pokemonIndex < pokemonList.length - 1 && <button onClick={increment}>Next</button>}
    </nav>
  );
}
