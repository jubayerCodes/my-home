import React from "react";
const { MongoClient, ServerApiVersion } = require("mongodb");

// /**
//  * @type {import ("mongodb").Db}
//  */

const connectDb = async () => {
  try {
    const uri = process.env.MONGODB_URI;

    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    const mongodb = client.db("myHome");

    return mongodb;
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;