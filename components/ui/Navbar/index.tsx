import { Spacer, Text, useTheme } from "@nextui-org/react"
import Image from "next/image"

export const Navbar = () => {

  const { theme } = useTheme()

  const style = {
    navbar: {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '0 1.25rem',
      backgroundColor: theme?.colors.gray900.value,
    }
  }
  return (
    <div style={style.navbar}>
      <Image src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'} alt={"Icono de la app"} width={70} height={70}/>
      <Text color='white' h2>P</Text>
      <Text color='white' h3>okemon</Text>
      <Spacer css={{flex: 1}} />
      <Text color='white'>Favorites</Text>
    </div>
  )
}
