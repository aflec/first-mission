// pages/api/tasks.js
import { getTasks, addTask } from '../../controllers/tasks';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    await getTasks(req, res);
  } else if (req.method === 'POST') {
    await addTask(req, res);
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
