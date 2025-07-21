import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect(`${process.env.MONGODB_URI}/RESUME`)
        .then(() => console.log("DB CONNECTED"));
}

