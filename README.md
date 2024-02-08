# URL Shortner Backend
- This This project is a backend implementation for a URL shortener application, built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It includes functionalities such as URL shortening, user authentication, and managing shortened URLs.

## Prerequisites

- Make sure you have the following installed:

- Node.js
- MongoDB



# Folder Structure
- Data
    - config.env   config files to store all env variables
    - database.js  databse file contain connectDB function  to connect databse

- Controllers
    - url.js  contains all controllers related to the url
    - user.js  contains all controllers related to the user

- middleware
    - auth.js  contains middlewares related to authenticated
    - error.js contain custom error middleware

- models
    - url.js  urlSchema and model
    - user.js  userSchema and model

- routes
    - url.js   routes related to url
    - user.js  routes related to user

- utils
    - features.js  contains sendToken function to set jwt token in cookie

- app.js
- server.js

# Dependencies
- bcrypt
- cookie-parser
- cors
- dotenv
- exppress
- jsonwebtoken
- mongoose
- shortid
- validator
- 

# Server

- connectDB  Connect database
- Listen  Listen to port

# App
- config   config dotenv
- useMiddlewares  express.json, cookieParser, cors, Error MiddleWare

- UseRoutes  userRouter, urlRouter

# Config Variable
-  PORT Port to listen
-  JWT_SECRET any random secret for jwt
-  MONGO_URI database URI

# Run the application
- npm start

# User Authentication
- User authentication is implemented using JWT (JSON Web Tokens).
- A JWT token is generated upon successful login and stored as an HTTP-only cookie.

# Error Handling
- Proper error handling is implemented for various scenarios, such as invalid URLs, server errors, and authentication failures.

# Security Considerations
- Cookies are marked as HTTP-only for enhanced security.
- Session cookies have a limited lifespan (15 minutes).
- SameSite attribute is set based on the environment to   prevent CSRF attacks.
- Secure attribute ensures cookies are only sent over HTTPS in production.