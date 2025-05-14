import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const { id } = req.query;

      if (!id) {
        return res.status(400).json({
          statusCode: 400,
          message: 'User ID is required',
        });
      }

      const user = await prisma.user.findUnique({
        where: { id: id as string },
        select: {
          id: true,
          name: true,
          email: true,
          title: true,
          role: true,
          createdAt: true,
          updatedAt: true,
        },
      });

      if (!user) {
        return res.status(404).json({
          statusCode: 404,
          message: 'User not found',
        });
      }

      return res.status(200).json(user);
    }

    if (req.method === 'PUT') {
      const { id } = req.query;
      const { name, email, title, role } = req.body;

      if (!id) {
        return res.status(400).json({
          statusCode: 400,
          message: 'User ID is required',
        });
      }

      const user = await prisma.user.update({
        where: { id: id as string },
        data: {
          name,
          email,
          title,
          role,
        },
      });

      return res.status(200).json(user);
    }

    return res.status(405).json({
      statusCode: 405,
      message: 'Method not allowed',
    });
  } catch (err: any) {
    if (err.code === 'P2002') {
      return res.status(400).json({
        statusCode: 400,
        message: 'A user with this email already exists',
      });
    }
    return res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
