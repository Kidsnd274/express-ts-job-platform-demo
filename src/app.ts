import express, { Router } from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { swaggerOptions } from './swagger';

import userRouter from './routes/api/user';
import jobRouter from './routes/api/job';
import adminJobRouter from './routes/api/admin/job';
import authRouter from './routes/api/auth';

const app = express();

// Swagger
const swaggerDocument = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Middleware
app.use(express.json());

// Routes
app.use('/api/user', userRouter);
app.use('/api/job', jobRouter);
app.use('/api/admin/job', adminJobRouter);
app.use('/api/auth', authRouter);

export default app;