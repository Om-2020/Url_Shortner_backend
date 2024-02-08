import mongoose from "mongoose";

export const connectDB = ()=>{

    mongoose.connect(process.env.MONGO_URI,{
        dbName: "url_Shortner_db",
    }).then((c)=>{
        console.log(`Database is Connected with ${c.connection.host}`);
    }).catch((e)=>{
        console.log(e);
    })

};


