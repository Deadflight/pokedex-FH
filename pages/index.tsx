import type { NextPage } from 'next'
import { Layout } from '../components/layouts'
import { GetStaticProps } from 'next'
import { pokeApi } from '../api'
import { PokemonList, SmallPokemon } from '../interfaces'
import { Card, Grid, Row, Text } from '@nextui-org/react'
import { PokemonCard } from '../components/pokemon';

interface Props {
  pokemons: SmallPokemon[]
}

const Home: NextPage<Props> = ({pokemons}) => {
  return (
    <>
      <Layout title='Listado de Pokemons'>
        <Grid.Container gap={2} justify='flex-start'>
          {pokemons.map((pokemon) => (
            <PokemonCard pokemon={pokemon} key={pokemon.name} />
          ))}
        </Grid.Container>
      </Layout>
    </>
  )
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonList>('/pokemon?limit=151')  // your fetch function here 
  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => ({
    name: pokemon.name,
    url: pokemon.url,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
  }))

  return {
    props: {
      pokemons
    }
  }
}

export default Home
