import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import HomeScreen from '../src/FRONTEND/VIEWS/HomeScreen'
import { GetStaticProps } from 'next'
import Header from '../src/FRONTEND/COMPONENTS/Header'
import Footer from '../src/FRONTEND/COMPONENTS/Footer'
import { useState } from 'react'

const Home = ({ projects }: any) => {

  const [hide, setHide] = useState<boolean>(false)

  const _hideHeader = (show: boolean) => {
    setHide(show)
  }

  return (
    <>
      <Head>
        <title>Ellah Nzikoba</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <Header showHeader={true} hideHeader={hide} />
        <HomeScreen projects={projects} hideHeader={_hideHeader} />
        <Footer />
      </main>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const { projects } = await import("../data/sample_data.json")
  return {
    props: {
      projects: projects

    }
  }

}
