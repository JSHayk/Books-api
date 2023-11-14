import express from "express";

import cors from 'cors';

import config from "./config/config.js";

import router from './routes/index.js';

const {
    app: {
        port
    }
} = config;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: '*' }));

app.use('/api', router);

app.listen(port, () => console.log(`Run on ${port}`))