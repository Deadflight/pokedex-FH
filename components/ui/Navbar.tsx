import { Link, Spacer, Text, useTheme } from "@nextui-org/react"
import Image from "next/image"
import { FC } from "react"

const Navbar: FC = () => {

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
      <Link href="/">
        <Text color='white' h2>P</Text>
        <Text color='white' h3>okemon</Text>
      </Link>
      <Spacer css={{flex: 1}} />
      <Link href="/favorites">
        <Text color='white'>Favorites</Text>  
      </Link>
    </div>
  )
}

export default Navbar
