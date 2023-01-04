import Link from "next/link";
import Projects from "../../src/FRONTEND/VIEWS/Projects";
import { GetStaticProps } from "next";
import Head from "next/head";
import Header from "../../src/FRONTEND/COMPONENTS/Header";

const MoreProjectsPage = ({projects}: any) => {

    return (
        <>
            <Head>
                <title>More Projects</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Header />
                <Projects projects={projects} />
            </main>
        </>
    )

}

export default MoreProjectsPage

export const getStaticProps: GetStaticProps = async () => {
    const { more_projects } = await import("../../data/sample_data.json")

    return {
        props: {
            projects: more_projects

        }
    }
    
}