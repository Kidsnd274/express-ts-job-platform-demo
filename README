# ExpressJS with TypeScript Jobs Platform API

This project demos Express.js API for managing users, jobs, and job applications, using an in-memory database with sample data.
## Getting Started
### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Kidsnd274/express-ts-job-platform-demo
   cd express-ts-job-platform-demo
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Environment Variables

An `example.env` file is included in the project root. By default, the project uses built-in defaults for development, but you can override them by creating a `.env` file:

```dotenv
PORT=3000
NODE_ENV=development
JWT_SECRET=<your-secret>
```

> **Note:** Using the default settings is fine for demos, but changing `JWT_SECRET` is important for security.

### Running the Project

Start the server:

```bash
npm run dev
```

On startup the server will:
1. Create mock data automatically (using createMockData component at `src/database/sampleData.ts`).
2. Listen on `http://localhost:<PORT>` (defaults to 3000).

## Sample Data

On startup, the app creates:
* **Admin user**: `admin@example.com` / `admin123` (email / password)
* **50 mock users**
* **20 mock jobs**

This is done by the `createMockData()` function in `src/database/sampleData.ts`, which is called in `app.ts` on line 17.

## API Overview
You can visit the API Documentation page while the server is running on `http://localhost:3000/api-docs`

### Authentication

All protected routes require a valid JWT in the `Authorization` header:

```
Authorization: Bearer <token>
```

Obtain a token by registering or logging in via the `/api/auth/register` and `/api/auth/login` endpoints.

### User Routes

* `GET /api/user/profile` – Retrieve the authenticated user’s profile.
* `GET /api/user/application` – List the authenticated user’s job applications.

> Both require a Bearer token for a regular `user` role.

### Job Routes

* `GET /api/job` – List all job listings.
* `GET /api/job/:id` – Get details for a specific job.
* `POST /api/job/:id/apply` – Apply to a specific job.

> All require a Bearer token for a regular `user` role.

### Admin Routes

* `GET /api/admin/job` – List all jobs (including inactive).
* `POST /api/admin/job` – Create a new job posting.
* `DELETE /api/admin/job/:id` – Delete a job posting.

> These endpoints require a Bearer token for an `admin` user.