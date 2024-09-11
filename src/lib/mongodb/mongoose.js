import mongoose from "mongoose";

let initialized = false;

export const connect = async () => {
    mongoose.set('strictQuery', true);

    if(initialized){
        console.log("MongoDb is now connected")
        return
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL,{
            dbName: "Learner app",
            useNewUrlParser: true,
            useUnifiedTopolofy: true,
        })
        console.log("MongoDb is connected")
        initialized= true;
    } catch (error) {
        console.log("Is there some error for really ")
    }
}