// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {MongoClient} from "mongodb";

export async function getObjects() {
  const uri = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    return await client.db("admin").collection("objects").findOne({id: 0})
  } catch (e) {
    console.error(e);
  } finally {
    await client.close()
  }
}

export default async function handler(req: any, res: any) {
  res.status(200).json(await getObjects());
}
