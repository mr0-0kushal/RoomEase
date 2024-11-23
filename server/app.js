import express from 'express';
import dotenv from 'dotenv';
import http from 'http';
import multer from 'multer';
import connectDB from './utils/dbConnection.js';


dotenv.config();

const app = express();
const server = http.createServer(app); // 
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // Serves static files
app.set('view engine', 'ejs'); // Set EJS as the template engine
app.set('views', './views'); // Set the views directory

// Routes
// import userRouter from './routers/user.routes.js'
// app.use('/api', userRouter)


app.get('/', (req, res) => {
    res.send('Hello, this is testing!');
});

// Start MongoDb and the server
connectDB()
.then(() => {
    server.listen(port , (err) => {
        if(err) throw err;
        console.log(`Server is live @ http://localhost:${port}`);
    })
})
.catch((err) => {
    console.log('Something Wrong With DB COnnection',err);
})

