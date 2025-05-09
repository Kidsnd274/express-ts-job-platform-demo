import express from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { swaggerOptions } from './swagger';

const app = express();

// Swagger
const swaggerDocument = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve)
app.get('/api-docs', swaggerUi.setup(swaggerDocument))

// Routers
const userRouter = require('./routes/api/user');

// Middleware
app.use(express.json());

// Routes
app.use('/api/user', userRouter);

export default app;