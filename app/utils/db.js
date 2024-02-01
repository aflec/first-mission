// utils/db.js
//import mongoose from 'mongoose';
//import mongoose = require("mongoose");
//const mongoose = require('mongoose');
import { connect } from 'mongoose';

const connection = {};

async function connectDB() {
  if (connection.isConnected) {
    return;
  }
  const connectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  // const db = await mongoose.connect(process.env.MONGODB_URI, connectionOptions);
  const db = await connect('mongodb://localhost:27017/firstmissiondb');

  //sudo cp /Users/andre/Downloads/mongodb-macos-x86_64-5.0.23/bin/* /usr/local/bin/

  connection.isConnected = db.connections[0].readyState;
}

export default connectDB;
