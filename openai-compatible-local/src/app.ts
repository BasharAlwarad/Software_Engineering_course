// Main Express application setup
import express from 'express';
import { completionsRouter } from '#routes';
import { errorHandler, notFoundHandler } from '#middlewares';

// Initialize Express app
const app = express();
const port = process.env.PORT || '3000';

// Middleware: Parse incoming JSON request bodies
app.use(express.json());

// Routes: Mount AI completions router at /ai path
app.use('/ai', completionsRouter);

// Catch-all: Handle 404 errors for undefined routes
app.use('*splat', notFoundHandler);

// Global error handler: Catches all errors from routes/middleware
app.use(errorHandler);

// Start server and listen on specified port
app.listen(port, () =>
  console.log(`\x1b[35mExample app listening at http://localhost:${port}\x1b[0m`)
);
