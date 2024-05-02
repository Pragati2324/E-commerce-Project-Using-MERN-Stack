import express from'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectionDB from './config/db.js';
import authRoutes from  './routes/authRoute.js';
dotenv.config();
// database config
connectionDB();

//rest object
const app = express();

//middlewares
app.use(express.json())
app.use(morgan('dev')); 

//routes

app.use('/api/v1/auth',authRoutes);

// rest api
app.get('/',(req,res)=>{
    res.send({message: '<h1>Welcome to our journey API</h1>'})
})

// Port 
const PORT=process.env.PORT || 8080;
// run listen
app.listen(PORT,()=>{
    console.log(`Server running on ${process.env.DEV_MODE}  mode on PORT  ${PORT}`);
})