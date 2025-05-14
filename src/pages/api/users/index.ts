import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';
import { UserRole } from '@prisma/client';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'POST') {
      const { name, email, title, role, accountId } = req.body;

      if (!name || !email || !accountId) {
        return res.status(400).json({
          statusCode: 400,
          message: 'Name, email, and accountId are required',
        });
      }

      const user = await prisma.user.create({
        data: {
          name,
          email,
          title,
          role: role || UserRole.PARTICIPANT,
          accountId,
        },
      });

      return res.status(201).json(user);
    }

    // GET request - fetch all users
    const users = await prisma.user.findMany({
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

    return res.status(200).json(users);
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
