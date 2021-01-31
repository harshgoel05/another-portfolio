import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { getDbClient } from '../../api/utils/db';

let dbClient: MongoClient;
export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    dbClient = await getDbClient();
    const data = await dbClient.db().collection('details').findOne({});
    res.statusCode = 200;
    res.json(data);
  } catch (err) {
    res.statusCode = 500;
    res.json({ success: false, error: err });
  }
};
