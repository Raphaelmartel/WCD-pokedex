const pokemonList = [
  {
    name: 'bulbasaur',
    imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
  },
  {
    name: 'mew',
    imgSrc: '',
  },
];

export function PokemonCard() {
  const pokemon = pokemonList[1];

  const pokemonDisplay = (pokemon) => {
    if (pokemon.imgSrc === undefined || pokemon.imgSrc === '') {
      return <p>???</p>;
    } else {
      return <img src={pokemon.imgSrc} alt="" />;
    }
  };

  return (
    <figure>
      {pokemonDisplay(pokemon)}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}
