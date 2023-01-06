import { NextApiResponse, NextApiRequest } from "next";
import { getAcademicProjects } from "../../../prisma/ProjectService";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const projects = await getAcademicProjects()
    res.status(200).json(projects)
}

export default handler
