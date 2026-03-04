import mongoose from "mongoose";

async function connectdb() {
  try {
    const db = await mongoose.connect("url");
    console.log("Database connection successfull ! ");
  } catch (error) {
    console.log(error);
  }
}
export default connectdb;
