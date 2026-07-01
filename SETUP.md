# Quick Setup Guide

## ⚡ Fast Start (3 Steps)

### Step 1: Setup MongoDB
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Get your connection string
4. Update `server/.env`:
   ```
   MONGO_URI=mongodb+srv://youruser:yourpass@cluster.mongodb.net/notes-db
   ```

### Step 2: Install & Run Backend
```bash
cd server
npm install
npm start
```
✅ Server running at http://localhost:5000

### Step 3: Install & Run Frontend
Open a new terminal:
```bash
cd client
npm install
npm run dev
```
✅ App running at http://localhost:3000

## 🎉 That's it!

Open http://localhost:3000 in your browser and start creating notes!

## Common Issues

**Q: MongoDB connection fails?**
- Check your connection string
- Whitelist your IP in MongoDB Atlas (Network Access)
- Ensure username/password are correct

**Q: Frontend can't connect to backend?**
- Verify backend is running on port 5000
- Check `client/.env` has `VITE_API_URL=http://localhost:5000/api`

**Q: Port 5000 already in use?**
- Change PORT in `server/.env`
- Update VITE_API_URL in `client/.env` accordingly
