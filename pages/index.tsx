import { Button } from '@nextui-org/react'
import type { NextPage } from 'next'
import { Layout } from '../components/layouts'

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Button color="gradient">
          Hello Next.js
        </Button>
      </Layout>
    </>
  )
}

export default Home
