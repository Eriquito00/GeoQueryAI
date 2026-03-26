import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import router from './infra/routes/GeoQueryAI.routes';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use(
    cors({
        origin: [
            'http://127.0.0.1:5500',
            'http://localhost:5500'
        ],
        methods: ['POST', 'OPTIONS'],
        allowedHeaders: ['Content-Type']
    })
);

app.use(router);

export default app;
