export function NavBar({ pokemonList, setPokemonIndex }) {
  return (
    <nav>
      {pokemonList.map((e, buttonIndex) => (
        <button
          onClick={() => {
            setPokemonIndex(buttonIndex);
            console.log(buttonIndex);
          }}
          key={buttonIndex}
        >
          {e.name}
        </button>
      ))}
    </nav>
  );
}
