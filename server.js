import { app } from "./app.js";
import dotenv from 'dotenv'
import connectDB from "./config/db.js";

dotenv.config(
    {
        path:"./.env"
    }
)

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})


// const PORT = process.env.PORT||3000;
// app.listen(PORT,()=>{
//     console.log(`Server is listening on port ${PORT}`)
// })