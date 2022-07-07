import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  id: number;
};

export default function login(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ id: 666 });
}
