import type {NextApiRequest, NextApiResponse} from "next";
import db from "@/prisma/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {

  // await db.tasks.generate();
  const tasks = await db.tasks.list();

  res.status(200).json({tasks});
}
