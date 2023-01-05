import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Header from "../../src/FRONTEND/COMPONENTS/Header";
import SingleProject from "../../src/FRONTEND/VIEWS/SingleProject";
import Footer from "../../src/FRONTEND/COMPONENTS/Footer";

const ProjectInfoPage = ({ project }: any) => {

    return (
        <>
            <Head>
                <title>More Projects</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Header showHeader={false} />
                <SingleProject project={project} />
                <Footer />
            </main>
        </>
    )
}

export default ProjectInfoPage

export const getStaticPaths: GetStaticPaths = async () => {

    const { projects } = await import("../../data/sample_data.json")
    const paths = projects.map(project => {
        return {
            params: {
                projectName: project.title.toLowerCase()
            }
        }
    })

    return {
        paths: paths,
        fallback: false
    }

}

export const getStaticProps: GetStaticProps = async (context) => {
    const { projects } = await import("../../data/sample_data.json")

    return {
        props: {
            project: projects.filter(pro => {
                return pro.title.toLowerCase() === context.params?.projectName
            })[0]
        }
    }
}