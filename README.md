# Notes App - Full Stack MERN Application

A simple notes application built with MongoDB, Express, React, and Node.js.

## Project Structure

```
notes-app/
├── client/          # React frontend (Vite)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Noteform.jsx
│   │   │   └── Notelist.jsx
│   │   ├── app.jsx
│   │   ├── app.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── .env
└── server/          # Express backend
    ├── models/
    │   └── note.js
    ├── routes/
    │   └── notes.js
    ├── server.js
    ├── package.json
    └── .env
```

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account (or local MongoDB)
- npm or yarn

### Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Open `server/.env`
   - Replace `YOUR_MONGODB_ATLAS_CONNECTION_STRING` with your actual MongoDB connection string
   - Example: `MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/notes-db?retryWrites=true&w=majority`

4. Start the server:
   ```bash
   npm start
   ```
   
   Or for development with auto-restart:
   ```bash
   npm run dev
   ```

   Server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Check environment variables:
   - The `client/.env` file should have:
     ```
     VITE_API_URL=http://localhost:5000/api
     ```

4. Start the development server:
   ```bash
   npm run dev
   ```

   Client will run on `http://localhost:3000`

## API Endpoints

- `GET /api/notes` - Fetch all notes
- `POST /api/notes` - Create a new note
- `DELETE /api/notes/:id` - Delete a note by ID

## Features

- ✅ Create notes with title and content
- ✅ View all notes in a list
- ✅ Delete notes
- ✅ Responsive design
- ✅ Real-time updates after create/delete operations

## Technologies Used

**Frontend:**
- React 18
- Vite
- Native Fetch API

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS enabled

## Deployment

### Backend Deployment (e.g., Render, Railway, Heroku)

1. Push your code to GitHub
2. Create a new web service
3. Set environment variables:
   - `PORT=5000`
   - `MONGO_URI=your_mongodb_connection_string`
4. Deploy from the `server` directory
5. Use the deployed URL as your backend API

### Frontend Deployment (e.g., Vercel, Netlify)

1. Update `client/.env`:
   ```
   VITE_API_URL=https://your-backend-url.com/api
   ```
2. Build the project:
   ```bash
   npm run build
   ```
3. Deploy the `dist` folder to your hosting service

## Development Notes

- The frontend uses Vite for fast development and building
- CORS is enabled on the backend to allow cross-origin requests
- All notes are sorted by creation date (newest first)
- MongoDB timestamps are automatically managed

## Troubleshooting

- **MongoDB Connection Error**: Verify your connection string and ensure your IP is whitelisted in MongoDB Atlas
- **CORS Error**: Make sure the backend CORS middleware is configured and the server is running
- **Port Already in Use**: Change the PORT in `server/.env` if 5000 is occupied

## License

MIT
