import { NextResponse } from "next/server";
import connectDb from "./connectDB";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  const page = parseInt(searchParams.get("page"));
  const limit = parseInt(searchParams.get("limit"));

  const mongodb = await connectDb();

  const propertyCollection = mongodb.collection("properties");

  const result = await propertyCollection
    .find()
    // .limit(limit * page)
    .toArray();

  return NextResponse.json(result);
};
