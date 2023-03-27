const pokemonList = [
  {
    name: 'bulbasaur',
    imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
  },
  {
    name: 'mew',
  },
];

export function PokemonCard() {
  const pokemon = pokemonList[0];

  return (
    <figure>
      <img src="" alt="bulbasaur" />
      <figcaption>bulbasaur</figcaption>
    </figure>
  );
}
