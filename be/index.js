import { createServer } from 'http';
import app from './app.js';
import connectDB from './config/connectDB.js';


const PORT = process.env.PORT || 3000;
// Connect to MongoDB
connectDB();

const server = createServer(app);
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

