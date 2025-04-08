import mongoose from "mongoose";

const contestSchema = new mongoose.Schema({
  name: String,
  url: String,
  platform: String,
  startTime: Date,
  duration: String,
  SolutionUrl:String,
});

export default mongoose.model("Contest", contestSchema);
