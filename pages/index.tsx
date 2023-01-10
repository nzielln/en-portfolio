import Head from "next/head"
import Script from "next/script"
import HomeScreen from "../src/FRONTEND/VIEWS/HomeScreen"
import { GetStaticProps } from "next"
import Header from "../src/FRONTEND/COMPONENTS/Header"
import Footer from "../src/FRONTEND/COMPONENTS/Footer"
import { useState } from "react"
import { getProjects } from "../prisma/ProjectService"
import Cursor from "../src/FRONTEND/COMPONENTS/Cursor"
import Menu from "../src/FRONTEND/COMPONENTS/Menu"
import { useSpring } from "@react-spring/web"

const Home = ({ projects }: any) => {
    const [showMenu, setShowMenu] = useState(true)

    const _showMenu = (show: boolean) => {
        setShowMenu(show)
    }


    return (
        <>
            <Head>
                <title>Ellah Nzikoba</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta
                    name="description"
                    content="Personal Website and for Ellah Nzikoba, MSCS @ Northeastern University"
                    key="desc"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />

                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/safari-pinned-tab.svg"
                    color="#da532c"
                />
            </Head>
            <main className="prt_main_index">
                <Header showMenuItems={showMenu} isDefault={true} />
                <HomeScreen projects={projects} showMenuAction={_showMenu} />
                <Footer />
            </main>
        </>
    )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
    const projects = await getProjects()
    return {
        props: {
            projects: projects,
        },
    }
}

export const getServerProps = () => {
    return {
        props: {},
    }
}
