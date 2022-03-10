import React, { useEffect, useState } from 'react'
import { Layout } from '../../components/layouts'
import { FavoritesPokemons } from '../../components/pokemon'
import { NoFavorites } from '../../components/ui'
import { localFavorites } from '../../utils'


const FavoritesPage = () => {
  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritesPokemons( localFavorites.pokemons() )
  }, [])

  return (
    <Layout title='Pokemones Favoritos'>
      {
        favoritesPokemons.length === 0 
        ? <NoFavorites />
        : <FavoritesPokemons pokemons={favoritesPokemons} />

      }
      
    </Layout>
  )
}

export default FavoritesPage