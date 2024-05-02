import mongoose  from "mongoose";
const connectionDB=async()=>{
    try{
        const conn =await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to Mongodb database ${conn.connection.host}`);
        
    }catch(err){
        console.error(`Error in Mongodb ${error}`);
    }
}
export default connectionDB;