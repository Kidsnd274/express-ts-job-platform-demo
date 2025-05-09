import express, { Express, Request, Response } from 'express';

const app = express();

const userRouter = require('./routes/api/user');

app.use('/api/user', userRouter);

export default app;