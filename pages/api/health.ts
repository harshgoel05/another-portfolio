import { NextApiRequest, NextApiResponse } from 'next';

const date: Date = new Date();
export default (req: NextApiRequest, res: NextApiResponse): void => {
  const uptime = +new Date() - +date;

  res.statusCode = 200;
  res.json({ name: 'Harsh Goel', uptime, startDate: date, currentDate: new Date() });
};
