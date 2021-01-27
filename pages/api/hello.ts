import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse): void => {
  res.statusCode = 200;
  res.json({ name: 'Harsh Goel' });
};
