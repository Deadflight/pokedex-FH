import React, { FC, useState } from 'react'
import { Pokemon, SmallPokemon } from '../../interfaces'
import { GetStaticProps, GetStaticPaths } from 'next'
import { pokeApi } from '../../api'
import { Layout } from '../../components/layouts';
import confetti from 'canvas-confetti';
import { localFavorites } from '../../utils';
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import { getPokemonInfo } from '../../utils/getPokemonInfo';

interface Props {
  pokemon: Pokemon
}

const PokemonByNamePage: FC<Props> = ({pokemon}) => {

  const [isInFavorites, setIsInFavorites] = useState(localFavorites.existInFavorites(pokemon.id))

  const toggleFavorite = () => {
    localFavorites.toggleFavorites(pokemon.id)
    setIsInFavorites(!isInFavorites)

    if (isInFavorites) return

    confetti({
      particleCount: 100,
      angle: -100,
      spread: 160,
      zIndex: 999,
      origin: {
        x: 1,
        y: 0
      }
    })
  }

  return (
    <Layout title={pokemon.name.toUpperCase()}>
      <Grid.Container css={{ marginTop: '0.3125rem' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{padding: '1.875rem'}}>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.front_default || '/no-image.png'}
                alt={pokemon.name}
                width='100%'
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text h1 transform="capitalize">{pokemon.name}</Text>
              <Button
                color="gradient"
                ghost={!isInFavorites}
                onClick={toggleFavorite}
              >
              {isInFavorites ? 'En favoritos' : 'Guardar en favoritos'}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container direction="row" display="flex" gap={0}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  )
}


// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes


export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get(`/pokemon?limit=151`) // your fetch function here 


  const pokemonNames = data.results.map((pokemon: SmallPokemon) => `${pokemon.name}`) // Must be a string
  return {
    paths: pokemonNames.map((name: string) =>({
      params: { name }
    })),
    fallback: 'blocking'
  }
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string }

  return {
    props: {
      pokemon: await getPokemonInfo(name)
    }
  }
}

export default PokemonByNamePage