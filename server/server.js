const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./db/connect')
const cors = require('cors');

const port = process.env.PORT || 3001;
const app = express();


const FileuploadRoute = require('./routes/routes')

app.use(cors());
app.use('/' , FileuploadRoute);



const start = async () => {
    try{
        await connectDB(process.env.MONGO_URL)
        app.listen(port , ()=>{
            console.log(`server on ${port}`);
        });
    }
    catch (err) {
        console.log(err);
    }
}

start();