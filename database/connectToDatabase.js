import { MongoClient } from "mongodb";

let url = "mongodb://localhost:27017" //MONGODB_URI_DBNAME
let cachedDb = null;

export async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }
  const client = await MongoClient.connect(url, { useNewUrlParser: true });
  const db = await client.db("Next-Dictionary");

  cachedDb = db;
  return db;
}