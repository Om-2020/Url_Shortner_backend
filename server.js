import {app} from "./app.js";
import { connectDB } from "./data/database.js";


const port = process.env.PORT;

connectDB();

app.listen(port,()=>{
    console.log(
      `Server is working on port:${process.env.PORT} in ${process.env.NODE_ENV} Mode`
    );
})

