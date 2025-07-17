import { MongoClient, ServerApiVersion } from "mongodb";

function dbConnect(collectionName: string) {
  const uri =
    "mongodb+srv://mongoose:5Y7wFawyXwUYNFIF@cluster0.pknd7d9.mongodb.net/car-doctor-db?retryWrites=true&w=majority&appName=Cluster0";

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  return client.db(process.env.DB_NAME).collection(collectionName);
}

export const serviceCollection = dbConnect('services');