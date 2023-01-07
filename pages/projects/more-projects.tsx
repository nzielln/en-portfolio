import Link from "next/link";
import Projects from "../../src/FRONTEND/VIEWS/Projects";
import { GetStaticProps } from "next";
import Head from "next/head";
import Header from "../../src/FRONTEND/COMPONENTS/Header";
import Footer from "../../src/FRONTEND/COMPONENTS/Footer";
import { useState } from "react";
import { ShowLogoAction } from "../../src/PROPS AND INTERFACES/Props";
import { getAcademicProjects } from "../../prisma/ProjectService";
import Cursor from "../../src/FRONTEND/COMPONENTS/Cursor";

const MoreProjectsPage = ({ projects }: any) => {
    const [hide, setHide] = useState<boolean>(false)

    const _hideHeader = (show: boolean) => {
        setHide(show)
    }

    return (
        <>
            <Head>
                <title>More Projects</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Cursor />
                <Header showHeader={false} hideHeader={false} />
                <Projects projects={projects} hideHeader={_hideHeader} />
                <Footer />
            </main>
        </>
    )

}

export default MoreProjectsPage

export const getStaticProps: GetStaticProps = async () => {
    const more_projects = await getAcademicProjects()

    return {
        props: {
            projects: more_projects

        }
    }
    
}
