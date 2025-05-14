import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case 'GET':
        const studies = await prisma.study.findMany({
          include: {
            owner: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        });
        return res.status(200).json(studies);

      case 'POST':
        const { name, participantCount, ownerId } = req.body;

        if (!name || !participantCount || !ownerId) {
          return res.status(400).json({
            statusCode: 400,
            message:
              'Missing required fields: name, participantCount, and ownerId are required',
          });
        }

        const newStudy = await prisma.study.create({
          data: {
            name,
            participantCount,
            ownerId,
            status: 'DRAFT',
          },
          include: {
            owner: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        });

        return res.status(201).json(newStudy);

      default:
        res.setHeader('Allow', ['GET', 'POST']);
        return res
          .status(405)
          .json({ message: `Method ${req.method} Not Allowed` });
    }
  } catch (err: any) {
    console.error('Error in studies API:', err);
    return res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
