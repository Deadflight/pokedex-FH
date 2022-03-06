import { FC } from "react"
import Head from "next/head"
import { Navbar } from '../ui/Navbar';

interface Props {
  title?: string
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Carlos Correa"></meta>
        <meta name="description" content={`Informacion sobre el pokemon ${title}`}></meta>
        <meta name="keywords" content={`${title}, pokemon, pokedex`}></meta> 
      </Head>
      <Navbar />
      <main>
        {children}
      </main>
    </>
  )
}