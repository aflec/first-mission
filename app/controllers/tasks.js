// controllers/tasks.js
import connectDB from '../utils/db';
import { Task } from '../models/Task';

export const getTasks = async function(req, res) {
  await connectDB();

  try {
    const tasks = await Task.find();
    res.status(200).json({ tasks: tasks });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const addTask = async (req, res) => {
  await connectDB();

  try {
    const { text } = req.body;
    const newTask = new Task({ text });
    await newTask.save();
    res.status(201).json({ task: newTask });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
