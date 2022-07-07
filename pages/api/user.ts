import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  first: string | undefined;
  last: string | undefined;
  error?: string;
};

export default function login(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { id } = req.body;

  if (id === 666) {
    res.status(200).json({
      first: 'Xu',
      last: 'Lishuai',
    });
    return;
  } else {
    res.status(400).json({
      error: 'Invalid ID',
      first: undefined,
      last: undefined,
    });
  }
}
