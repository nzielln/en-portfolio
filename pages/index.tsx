import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import HomeScreen from '../src/FRONTEND/VIEWS/HomeScreen'
import { GetStaticProps } from 'next'
import Header from '../src/FRONTEND/COMPONENTS/Header'

const Home = ({projects}: any) => {
  return (
    <>
      <Head>
        <title>Ellah Nzikoba</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <Header />
        <HomeScreen projects={projects} />
      </main>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const {projects} = await import("../data/sample_data.json")

  console.log(projects)
  return {
    props: {
      projects: projects

    }
  }

}
