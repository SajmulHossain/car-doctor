import { MongoClient, ServerApiVersion } from "mongodb";

function dbConnect(collectionName: string) {
  const uri = process.env.DB_URI as string;

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  return client.db(process.env.DB_NAME).collection(collectionName);
}

export const serviceCollection = dbConnect("services");
