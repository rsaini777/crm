const express = require ("express");
const cors=require("cors");
const mongoose= require("mongoose");

require("dotenv").config();
const app=express();
const port=process.env.PORT || 7890;

app.use(cors());
app.use(express.json());

const uri=process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true})
.then(() => console.log( 'Database Connected' ))
     .catch(err => console.log( err ));
const connection=mongoose.connection;
connection.once("open",()=>{
    console.log("Mongodb database connection established succsesfully");
})


//ROUTEs

const storeRoutes=require("./routes/store")
app.use('/api',storeRoutes)

const userRoutes=require("./routes/userinfo")
app.use('/api',userRoutes)

const pinRoutes=require("./routes/pincode")
app.use('/api',pinRoutes)

app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
})
