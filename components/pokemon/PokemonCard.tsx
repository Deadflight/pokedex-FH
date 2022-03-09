import { Card, Grid, Row, Text } from "@nextui-org/react"
import { useRouter } from "next/router"
import { FC } from "react"
import { SmallPokemon } from "../../interfaces"


interface Props {
  pokemon:  SmallPokemon
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const { name, id, img } = pokemon
  const router = useRouter()

  const handleClick = () => {
    router.push(`/pokemon/${id}`)
  }

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={name}>
      <Card hoverable clickable onClick={handleClick} >
        <Card.Body css={{p: 1}}>
            <Card.Image src={img} width='100%' height={200} />
        </Card.Body>
        <Card.Footer>
          <Row justify='space-between'>
            <Text transform='capitalize'>{name}</Text>
            <Text>#{id}</Text>
            </Row>
        </Card.Footer>
      </Card>
    </Grid>
  )
}
