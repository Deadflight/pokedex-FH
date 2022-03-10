import { Card, Grid } from "@nextui-org/react"
import { useRouter } from "next/router"
import { FC } from "react"

interface Props {
  pokemonId: number
}

const FavoriteCardPokemon: FC<Props> = ({ pokemonId }) => {
  const router = useRouter()

  const onFavoriteClicked = () => {
    router.push(`/pokemon/${pokemonId}`)
  }

  return (
    <Grid xs={6} sm={3} md={2} key={pokemonId}>
      <Card hoverable onClick={onFavoriteClicked} clickable css={{padding: '1rem'}}>
          <Card.Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
            width={'100%'}
            height={140}
          />
      </Card>
    </Grid>
  )
}

export default FavoriteCardPokemon