import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST" && req.body.key !== process.env.NEXT_PUBLIC_KEY) {
    return res.status(400).json({ message: "Invalid" });
  }

  try {
    await prisma.post.create({
      data: {
        ...req.body.post,
      },
    });
    return res.status(200).json({ message: "ok" });
  } catch (error) {
    return res.status(400).json({ message: "Invalid" });
  }
}
