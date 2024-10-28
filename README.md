# 319.SBA - MongoDB Database Application

This project is a MongoDB database application. It provides a simple API for managing information about users, games, and reviews. The project is built using **Node.js**, **Express**, and **Mongoose**.

## Setup and Usage

To set up, seed, and start using the project, follow these commands:

```bash
# 1. Clone the repository
git clone https://github.com/AntRkv/319.SBA.git

# 2. Navigate into the project directory
cd 319.SBA

# 3. Install dependencies
npm install

# 4. Create a .env file with the following variables:
echo "PORT=3000" >> .env
echo "MONGO_URI=your_mongodb_connection_string" >> .env
# Replace `your_mongodb_connection_string` with your MongoDB URI

# 5. Start the server
npm start
# The API will be available at http://localhost:3000 (or the port specified in .env)

# 6. Seed the database with sample data
curl -X GET http://localhost:3000/seed
# This will populate the database with sample users, games, and reviews.

# Retrieve all users
curl -X GET http://localhost:3000/api/users

# Retrieve a user by ID
curl -X GET http://localhost:3000/api/users/{user_id}

# Add a game to a user's favorites
curl -X POST http://localhost:3000/api/users/{user_id}/favorites -H "Content-Type: application/json" -d '{"gameId": "game_id"}'

# Delete a user by ID
curl -X DELETE http://localhost:3000/api/users/{user_id}

# Retrieve all games
curl -X GET http://localhost:3000/api/games

# Retrieve a game by ID
curl -X GET http://localhost:3000/api/games/{game_id}

# Add a new game
curl -X POST http://localhost:3000/api/games -H "Content-Type: application/json" -d '{"title": "Game Title", "genre": "RPG", "platform": "PC", "releaseDate": "2023-01-01", "rating": 9}'

# Update a game by ID
curl -X PUT http://localhost:3000/api/games/{game_id} -H "Content-Type: application/json" -d '{"title": "Updated Game Title", "rating": 8}'

# Delete a game by ID
curl -X DELETE http://localhost:3000/api/games/{game_id}

# Retrieve all reviews
curl -X GET http://localhost:3000/api/reviews

# Retrieve a review by ID
curl -X GET http://localhost:3000/api/reviews/{review_id}

# Add a new review
curl -X POST http://localhost:3000/api/reviews -H "Content-Type: application/json" -d '{"gameId": "game_id", "userId": "user_id", "reviewText": "Great game!", "rating": 9}'

# Update a review by ID
curl -X PUT http://localhost:3000/api/reviews/{review_id} -H "Content-Type: application/json" -d '{"reviewText": "Updated review text", "rating": 8}'

# Delete a review by ID
curl -X DELETE http://localhost:3000/api/reviews/{review_id}

