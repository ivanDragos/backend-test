const mongoose = require("mongoose");
const config = require("../config");

const env = process.env.NODE_ENV || 'development';
const { MONGO_URI } = config.getSection(env);

// const uri = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@semosacademy.g5spopb.mongodb.net/exams?retryWrites=true&w=majority`;

async function connect(){
    try{
        await mongoose.connect(MONGO_URI, {});
        console.log('MongoDB connected');
    }catch(err){
        console.log('MongoDB connection error:', err);
    }
}

connect();
