// api/tasks.js
import clientPromise from "../../lib/mongodb";
import { ObjectId } from "bson";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("tasks");

  if (req.method === 'GET') {
    const tasks = await db.collection("tasks").find({}).toArray();
    res.json({ status: 200, data: tasks });
  } else if (req.method === 'POST') {
    let bodyObject = (req.body);
    let myTask = await db.collection("tasks").insertOne(bodyObject);
    res.json(myTask.ops[0]);
  } else if (req.method === 'DELETE') {
    let bodyObject = (req.body);
    let deletedReturn = await db.collection("tasks").deleteOne({
      "_id": new ObjectId(bodyObject._id)
    });
    res.json({quantidadeDocumentosApagados: deletedReturn.deletedCount});
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}