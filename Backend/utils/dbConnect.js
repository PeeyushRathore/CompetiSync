import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://peeyushrathore2004:pandeyPeeyush1711@cluster0.uskr96a.mongodb.net/",
      {
        useNewUrlParser: true,
      }
    );

    console.log("✅ MongoDB Connected Successfully!");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1); // Exit process on failure
  }
};

export default dbConnect;
