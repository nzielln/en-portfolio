import { NextApiResponse, NextApiRequest } from "next"
import {
    getProjects,
} from "../../../prisma/ProjectService"

const handler_all = async (req: NextApiRequest, res: NextApiResponse) => {
    const projects = await getProjects()

    res.status(200).json(projects)
}

export default handler_all
