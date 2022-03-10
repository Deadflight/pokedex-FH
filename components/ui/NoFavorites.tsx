import { Container, Image, Text } from "@nextui-org/react"
import { FC } from "react"

const NoFavorites: FC = () => {
  return (
    <Container css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'calc(100vh - 6.25rem)',
        alignSelf: 'center'
      }}
      >
        <Text>No Hay Favoritos</Text>
        <Image
          src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg'
          width={250}
          height={250}
          alt='NoFavorites'
          css={{
            opacity: 0.1
          }}
        />
    </Container>
  )
}

export default NoFavorites