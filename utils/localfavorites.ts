// agregar o quitar de favoritos
const toggleFavorites = (id: number) => {

  let favorites = JSON.parse(localStorage.getItem('pokemonFavorites') || '[]');

  if (favorites.includes(id)) {
    // remove
    favorites = favorites.filter((pokeId: number) => pokeId !== id);
  }else {
    // add
    favorites.push(id);
  }

  localStorage.setItem('pokemonFavorites', JSON.stringify(favorites));
}

// verifica si el pokemon esta en favoritos
const existInFavorites = (id: number): boolean => {

  // para verificar que exista window para acceder a localStorage
  if( typeof window === 'undefined') return false;

  const favorites = JSON.parse(localStorage.getItem('pokemonFavorites') || '[]');

  return favorites.includes(id);
}

const  pokemons = (): number[] => {
  return JSON.parse(localStorage.getItem('pokemonFavorites') || '[]');
}

export default {
  toggleFavorites,
  existInFavorites,
  pokemons
}