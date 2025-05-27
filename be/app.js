import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import session from 'express-session';
import authRoute from './routes/authRoute.js';



const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173', // Adjust this to your frontend URL
    credentials: true, // Allow cookies to be sent
}));

app.use(session({
  secret: process.env.SESSION_SECRET || 'your_session_secret_here',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // true in prod, false for dev
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  },
}));




app.get('/', (req, res) => {
    res.status(200).send('Hello, World!');
})

app.use('/api/auth',authRoute)

export default app;