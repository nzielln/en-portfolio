import { prisma } from "./prisma"

export const getProjects = async () => {
    const projects = await prisma.project.findMany({
        where: {
            NOT: {
                images:{}
            }
        }
    })

    return projects
}

export const getAcademicProjects = async () => {
    const projects = await prisma.project.findMany({
        where: {
            images: {},
        },
    })
    return projects
}
