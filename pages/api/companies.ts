import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { getDbClient } from '../../api/utils/db';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const dbClient: MongoClient = await getDbClient();
    const data = await dbClient
      .db()
      .collection('companies')
      .find({})
      .project({ _id: 0 })
      .sort({ order: 1 })
      .toArray();
    res.statusCode = 200;
    res.json(data);
  } catch (err) {
    res.statusCode = 500;
    res.json({ success: false, error: err });
  }
};
