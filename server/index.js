import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import login from './routers/login.js';
import mongoose from 'mongoose';


const app = express();
const PORT = process.env.port || 5000;
const URI = "mongodb+srv://tuanle30122003:tuanbn123@registry-total.7sapray.mongodb.net/?retryWrites=true&w=majority";


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }));
app.use(cors());

app.use('/login', login);

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB connected");
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    }).catch((err) => {
        console.log(err);
    });