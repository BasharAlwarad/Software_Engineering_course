# React Event Scheduler - Teaching Project

This workspace contains two separate apps that work together:

1. A React frontend in `React_event_scheduler/`
2. A Node.js/Express backend API that runs on `http://localhost:3001`

The goal of this project is to help beginner MERN students understand how a React app talks to a backend API. The frontend does not connect to MongoDB directly. Instead, it sends HTTP requests to the backend, and the backend handles the database, authentication, and data rules.

## How The Two Apps Work Together

The easiest way to think about this project is:

- The React app is the user interface.
- The Express app is the data and authentication layer.
- The browser is the place where requests are made and results are shown.

When a user opens the React app, the pages load in the browser. Some pages then call the backend with `fetch`:

- `Home` loads users from `GET http://localhost:3001/api/users`
- `SignUp` sends new user data to `POST http://localhost:3001/api/users`
- `Login` sends credentials to `POST http://localhost:3001/api/auth/login`
- `UserProfile` requests protected data from `GET http://localhost:3001/api/auth/profile`

If the login succeeds, the backend returns a token. The frontend stores that token in `localStorage` and sends it back in later requests using the `Authorization: Bearer <token>` header.

## Beginner Flow

Here is the full learning flow in simple terms:

1. A student opens the React app in the browser.
2. The React app shows pages like Home, Login, Sign Up, and Profile.
3. A page sends a request to the backend API.
4. The backend reads or changes data in the database.
5. The backend sends JSON back to React.
6. React saves the data in state and updates the screen.

This is the core MERN idea: the frontend and backend are separate, but they communicate through API requests and JSON responses.

## Frontend Structure

The frontend is a Vite React app. Its main files are:

- `src/main.jsx` mounts the React app into the page
- `src/App.jsx` sets up routing
- `src/components/Nav.jsx` shows the navigation bar and login/logout state
- `src/components/UserCard.jsx` displays one user in the Home page list
- `src/Pages/Home.jsx` fetches and shows users from the backend
- `src/Pages/Login.jsx` handles login
- `src/Pages/SignUp.jsx` handles new user registration
- `src/Pages/UserProfile.jsx` shows the logged-in user profile
- `src/Pages/Events.jsx` and `src/Pages/Event.jsx` are starter pages for event work

The app uses React Router so different URLs show different screens without reloading the whole page.

## What Each Page Does

### Home

The Home page requests all users from the backend and shows them as cards.

- It uses `useEffect` to load data when the page opens
- It stores the response in React state with `useState`
- It maps over the data and renders one `UserCard` per user

This page is a good beginner example of how to load server data into a React component.

### Sign Up

The Sign Up page sends a new user object to the backend.

- The form collects email and password
- On submit, it sends a `POST` request to `/api/users`
- If the backend accepts the request, the user is redirected to the login page

This teaches form handling, controlled inputs, and POST requests.

### Login

The Login page authenticates the user.

- The form sends email and password to `/api/auth/login`
- If the backend returns a token, the token is saved in `localStorage`
- After that, the user is sent to the profile page

This teaches authentication and token-based login.

### User Profile

The profile page shows protected information for the logged-in user.

- It reads the token from `localStorage`
- If there is no token, it sends the user back to `/login`
- If a token exists, it calls `/api/auth/profile`
- The token is sent in the `Authorization` header

This is a simple example of protected routes and authenticated API calls.

### Events Pages

`Events.jsx` and `Event.jsx` are placeholders for future event features.

These pages are useful for students to extend the project with event listing, event details, event creation, and editing.

## Backend Responsibilities

The backend is an Express API server. It exposes JSON endpoints and Swagger documentation.

Based on the backend README, the main routes are:

### Users

- `POST /api/users` create a new user
- `GET /api/users` get all users

### Events

- `POST /api/events` create a new event
- `GET /api/events` get all events
- `GET /api/events/:id` get one event by ID
- `PUT /api/events/:id` update an event
- `DELETE /api/events/:id` delete an event
- `GET /api/events/upcoming` get upcoming events

### Auth

- `POST /api/auth/login` login a user and return a token
- `GET /api/auth/profile` return the logged-in user profile

The backend also provides Swagger docs at `http://localhost:3001/api-docs`.

## Setup

You need both apps running.

### 1. Start the backend

Follow the backend README for the API server. In general, you will:

- install dependencies with `npm install`
- start the server with `npm run dev`
- open the API at `http://localhost:3001`

### 2. Start the frontend

Open `React_event_scheduler/` and run:

```bash
npm install
npm run dev
```

The Vite app will start in the browser, usually at `http://localhost:5173`.

## Environment Notes

The backend uses environment variables through a `.env` file.

- Copy the values from `example.env`
- You can change `JWT_SECRET` and `PORT` if needed

The frontend currently uses hardcoded API URLs like `http://localhost:3001`. That makes the connection easy to understand for beginners. Later, this can be improved by moving the backend URL into an environment variable.

## Learning Goals

This project is designed to teach:

- React components and props
- `useState` and `useEffect`
- forms and controlled inputs
- routing with React Router
- `fetch` for API calls
- login with tokens
- protected data requests
- separating frontend and backend responsibilities in a MERN-style app

## Notes For Students

- The frontend is responsible for display and interaction.
- The backend is responsible for data, authentication, and business rules.
- React components should not talk to the database directly.
- API responses are JSON, so React can read them and update the UI.
- `localStorage` is used here for teaching, but real production apps may use stronger session strategies.

## Current Status

The project already includes:

- user listing on the Home page
- sign up
- login
- profile fetching for logged-in users
- navigation that changes based on login state

The event pages are ready for future exercises and can be expanded as part of the course.
