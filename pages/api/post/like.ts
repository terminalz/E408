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
    if (req.body.increment) {
      await prisma.post.update({
        where: {
          id: req.body.id,
        },
        data: {
          like: {
            increment: 1,
          },
        },
      });
    } else {
      await prisma.post.update({
        where: {
          id: req.body.id,
        },
        data: {
          like: {
            decrement: 1,
          },
        },
      });
    }
    return res.status(200).json({ message: "ok" });
  } catch (error) {
    return res.status(400).json({ message: "Invalid" });
  }
}
