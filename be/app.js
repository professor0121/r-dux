import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import authRoute from './routes/authRoute.js';



const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: '*', // Adjust this to your frontend URL
    credentials: true, // Allow cookies to be sent
}));




app.get('/', (req, res) => {
    res.status(200).send('Hello, World!');
})

app.use('/api/auth',authRoute)

export default app;