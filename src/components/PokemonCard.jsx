export function PokemonCard({ pokemon }) {
  
  return (
    <figure>
      {pokemonDisplay(pokemon)}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

function pokemonDisplay(pokemon) {
  if (pokemon.imgSrc === undefined || pokemon.imgSrc === '') {
    return <p>???</p>;
  } else {
    return <img src={pokemon.imgSrc} alt="" />;
  }
}
