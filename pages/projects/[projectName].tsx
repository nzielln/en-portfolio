import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Header from "../../src/FRONTEND/COMPONENTS/Header";
import SingleProject from "../../src/FRONTEND/VIEWS/SingleProject";
import Footer from "../../src/FRONTEND/COMPONENTS/Footer";
import { getProjects } from "../../prisma/ProjectService";
import Cursor from "../../src/FRONTEND/COMPONENTS/Cursor";

const ProjectInfoPage = ({ projects, project }: any) => {

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
                <SingleProject project={project} projects={projects} />
                <Footer />
            </main>
        </>
    )
}

export default ProjectInfoPage

export const getStaticPaths: GetStaticPaths = async () => {

    const projects = await getProjects()
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
    const projects = await getProjects()

    return {
        props: {
            projects: projects,
            project: projects.filter(pro => {
                return pro.title.toLowerCase() === context.params?.projectName
            })[0]
        }
    }
}
