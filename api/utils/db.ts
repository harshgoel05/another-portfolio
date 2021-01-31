import { MongoClient } from 'mongodb';

let dbClient: MongoClient;
export async function initDbClient(): Promise<MongoClient> {
  dbClient = await MongoClient.connect(process.env.MONGODB_URI || '', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ignoreUndefined: true
  });
  console.log('✔️   Connected to Database');
  return dbClient;
}

export async function getDbClient(): Promise<MongoClient> {
  if (!dbClient) {
    await initDbClient();
  }
  return dbClient;
}
