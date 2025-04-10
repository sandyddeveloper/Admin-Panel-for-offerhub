import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL;

if (!MONGO_URL) {
    throw new Error("Please specify a URL to connect to MongoDB");
}

export async function dbConnect() {
    if (mongoose.connection.readyState !== 1) {
        try {
            await mongoose.connect(MONGO_URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            console.log(`✅ DB connection established to: ${MONGO_URL}`);
        } catch (error) {
            console.error(`❌ Error connecting to MongoDB: ${error.message}`);
            process.exit(1);
        }
    } else {
        console.log("⚡ DB already connected");
    }
}
