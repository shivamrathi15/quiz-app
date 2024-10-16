# quiz-app
# Quiz Application

A basic online quiz application built using Node.js and Express.js. This project allows users to register, log in, create quizzes, take quizzes, and view results.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Running the Application](#running-the-application)
- [License](#license)

## Features

- User authentication (Register/Login)
- MCQ Quiz Management
  - Create quizzes
  - Get all quizzes
  - Get quiz details
  - Take a quiz
  - View results

## Technologies Used

- **Node.js**: JavaScript runtime for server-side development
- **Express.js**: Web framework for building APIs
- **MongoDB**: NoSQL database for storing user and quiz data
- **Mongoose**: ODM library for MongoDB
- **bcryptjs**: Library for hashing passwords
- **jsonwebtoken**: For user authentication using JWT
- **dotenv**: For managing environment variables

## Getting Started

### Prerequisites

- Node.js installed on your machine
- MongoDB installed and running (or use MongoDB Atlas)
- Git installed (optional for version control)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/quiz-app.git

2. Navigate to the project directory:
cd quiz-app

3. Install the dependencies:
npm install

4. Create a .env file in the root of the project and add the following variables:
MONGO_URI=mongodb://localhost:27017/quiz-app
JWT_SECRET=your_jwt_secret
PORT=3000






