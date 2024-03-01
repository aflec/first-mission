// api/tasks.js
import clientPromise from "../../lib/mongodb";
import { ObjectId } from "bson";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("tasks");

/*
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
  } else if (req.method === 'PUT') {
    let bodyObject = (req.body);
    const filter = {
      "_id": new ObjectId(bodyObject._id)
    };
    const update = { $set: {checked: bodyObject.checked} };
    let updateResult = await db.collection("tasks").updateOne(filter, update);
    res.json(updateResult);
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
*/

  let bodyObject = (req.body);
  switch (req.method) {
    case 'GET':
    const tasks = await db.collection("tasks").find({}).toArray();
    res.json({ status: 200, data: tasks });
    break;
    case 'POST':
    let myTask = await db.collection("tasks").insertOne(bodyObject);
    res.json(myTask.ops[0]);
    break;
    case 'DELETE':
    let deletedReturn = await db.collection("tasks").deleteOne({
      "_id": new ObjectId(bodyObject._id)
    });
    res.json({quantidadeDocumentosApagados: deletedReturn.deletedCount});
    break;
    case 'PUT':
    const filter = {
      "_id": new ObjectId(bodyObject._id)
    };
    const update = { $set: {checked: bodyObject.checked} };
    let updateResult = await db.collection("tasks").updateOne(filter, update);
    res.json(updateResult);
    break;
    default:
    res.status(405).json({ error: 'Method Not Allowed' });
    break;
  }
}