# Event Management API Server

This project is a Node.js Express API server designed for managing events. It includes Swagger UI for testing and interacting with the API endpoints.

## Prerequisites

Before running this server, ensure you have the following installed:

- [nodejs](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:WebDev-WBSCodingSchool/events-api.git
   cd events-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Running the Server

To start the server, run the following command:

```bash
npm run dev
```

The server will start running at [http://localhost:3001](http://localhost:3001)

## Swagger API Documentation

The API endpoints are documented using Swagger. You can access the Swagger UI to view and test the API requests. Here’s how to access it:

• Swagger UI: Open a web browser and go to [http://localhost:3001/api-docs](http://localhost:3001/api-docs)

## API Endpoints

The following endpoints are available:

### Users

- **POST /api/users** Create a new event.
- **GET /api/users** Get all events.
- **GET /api/events/:id** Get a single event by ID.
- **PUT /api/events/:id** Update an existing event.
- **DELETE /api/events/:id** Delete an event by ID.

### Events

- **POST /api/events** Create a new event.
- **GET /api/events** Get all events.
- **GET /api/events/:id** Get a single event by ID.
- **PUT /api/events/:id** Update an existing event.
- **DELETE /api/events/:id** Delete an event by ID.
- **GET /api/events/upcoming** Get upcoming events.

### Auth

- **POST /api/auth/login** Authenticates the user.
- **GET /api/auth/profile** Get the logged-in user.

## Configuration

Environment-specific configurations can be set in `.env` file. take a look at the `example.env` file.

Create a new `.env` file and then copy the contents of `example.env` into it, you may change the `JWT_SECRET` and `PORT` values.

## Database Seeding

To populate the database with initial data, run the following command:

```bash
npm run seed
```
