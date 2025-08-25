import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import connectDB from './config/mongodb.js';

const app = express();
const port = process.env.PORT || 4000 // use the port in env, otherwise use 4000
connectDB();

app.use(express.json()); // parse incoming JSON req bodies
app.use(cookieParser()); // add can  read cookies
app.use(cors({credentials: true})) // allows browser to send cookies across domains/cookies to store JWTs

app.get('/', (req,  res)=> res.send("API Working")); 

app.listen(port, ()=> console.log(`Server started on Port: ${port}
`))