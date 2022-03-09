import { Layout } from "../../components/layouts"
import { NextPage } from "next"
import { GetStaticProps } from 'next'
import { GetStaticPaths } from 'next'
import { pokeApi } from "../../api"
import { Pokemon } from "../../interfaces"
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react"

interface Props {
  pokemon: Pokemon
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

  return (
    <Layout title="Algun Pokemon">
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
                ghost
              >
                Guardar en favoritos
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
  // const { data } = await  // your fetch function here 

  const pokemonLimit = [...Array(151)].map((_, index) => `${index + 1}`) // Must be a string

  return {
    paths: pokemonLimit.map((id) => ({ 
      params: { id } }
    )),
    fallback: false
  }
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }

  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`)  // your fetch function here 
  // const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => ({
  //   name: pokemon.name,
  //   url: pokemon.url,
  //   id: index + 1,
  //   img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
  // }))

  return {
    props: {
      pokemon: data
    }
  }
}

export default PokemonPage