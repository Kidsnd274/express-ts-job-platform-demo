import { Options } from 'swagger-jsdoc';

export const swaggerOptions: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'ExpressJS Jobs API',
      version: '1.0.0',
      description: 'APIs for user and admin job operations',
    },
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        }
      }
    },
  },
  apis: ['./src/routes/api/*.ts', './src/routes/api/admin/*.ts'],
};