import mongoose from 'mongoose';
import { db_name } from '../constant.js';



const connectDB = async()=>{
    try{
        console.log("Mongo URI:", process.env.MONGODB_URI || "Not Found");
        const connectioninstance =await mongoose.connect(`${process.env.MONGODB_URI}/${db_name}`)
        console.log(`mongodb connected lallala || connected on ${connectioninstance.connection.host}`)

    }catch(err){
        console.log("Error in connecting to DB",err.message);
        process.exit(1);
    }
}

export default connectDB