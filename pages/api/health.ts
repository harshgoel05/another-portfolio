import { NextApiRequest, NextApiResponse } from 'next';

const date: Date = new Date();
export default (req: NextApiRequest, res: NextApiResponse): void => {
  try {
    const uptime = +new Date() - +date;
    res.statusCode = 200;
    res.json({ name: 'Harsh Goel', uptime, startDate: date, currentDate: new Date() });
  } catch (err) {
    res.statusCode = 500;
    res.json({ success: false, error: err });
  }
};
