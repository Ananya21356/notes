# Deployment Guide - Render

This guide will help you deploy your Notes App to Render (free tier available).

## Prerequisites
- GitHub account with your code pushed
- MongoDB Atlas account (already set up)
- Render account (sign up at https://render.com)

---

## 🚀 Quick Deployment Steps

### Part 1: Deploy Backend API

1. **Go to Render Dashboard**
   - Visit https://dashboard.render.com
   - Click **"New +"** → **"Web Service"**

2. **Connect GitHub Repository**
   - Click **"Connect account"** to link your GitHub
   - Select repository: `Ananya21356/notes`
   - Click **"Connect"**

3. **Configure Backend Service**
   ```
   Name: notes-api
   Region: Choose closest to you
   Branch: main
   Root Directory: server
   Runtime: Node
   Build Command: npm install
   Start Command: npm start
   ```

4. **Select Free Plan**
   - Choose **"Free"** plan (0$/month)
   - Note: Free tier spins down after inactivity (first request may be slow)

5. **Add Environment Variables**
   Click **"Advanced"** → **"Add Environment Variable"**
   
   Add these variables:
   ```
   PORT = 5001
   MONGO_URI = mongodb://ananyaadimane_db_user:24l0DmZncHBnMhL8@ac-eygjmbu-shard-00-00.htqdsuf.mongodb.net:27017,ac-eygjmbu-shard-00-01.htqdsuf.mongodb.net:27017,ac-eygjmbu-shard-00-02.htqdsuf.mongodb.net:27017/?ssl=true&replicaSet=atlas-8p5e8i-shard-0&authSource=admin&appName=notes
   NODE_ENV = production
   ```

6. **Deploy Backend**
   - Click **"Create Web Service"**
   - Wait for deployment (5-10 minutes)
   - Copy your backend URL (e.g., `https://notes-api.onrender.com`)

---

### Part 2: Deploy Frontend

1. **Create New Web Service**
   - Click **"New +"** → **"Web Service"**
   - Select same repository: `Ananya21356/notes`

2. **Configure Frontend Service**
   ```
   Name: notes-client
   Region: Same as backend
   Branch: main
   Root Directory: client
   Runtime: Node
   Build Command: npm install && npm run build
   Start Command: npm run preview
   ```

3. **Add Environment Variables**
   ```
   VITE_API_URL = https://your-backend-url.onrender.com/api
   ```
   
   ⚠️ **Important**: Replace `your-backend-url` with the actual URL from Step 1.6
   
   Example:
   ```
   VITE_API_URL = https://notes-api.onrender.com/api
   ```

4. **Deploy Frontend**
   - Click **"Create Web Service"**
   - Wait for deployment
   - Your app will be live at: `https://notes-client.onrender.com`

---

## 🔧 Post-Deployment Configuration

### Update Backend CORS (Important!)

After frontend is deployed, update your backend to allow frontend domain:

1. Go to your backend service on Render
2. Click **"Shell"** or update `server/server.js` to:

```javascript
const cors = require("cors");

// Update CORS configuration
app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://notes-client.onrender.com',  // Add your frontend URL
    'https://your-custom-domain.com'       // Add any custom domains
  ],
  credentials: true
}));
```

3. Push changes and redeploy

---

## 📝 Deployment Checklist

- [ ] Backend deployed successfully
- [ ] Backend URL copied
- [ ] Frontend environment variable updated with backend URL
- [ ] Frontend deployed successfully
- [ ] MongoDB connection working (check backend logs)
- [ ] CORS configured for frontend domain
- [ ] Test creating a note
- [ ] Test deleting a note

---

## 🐛 Troubleshooting

### Backend won't connect to MongoDB
- ✅ Check MONGO_URI is correct in Render environment variables
- ✅ Whitelist Render IPs in MongoDB Atlas:
  - Go to MongoDB Atlas → Network Access
  - Click "Add IP Address"
  - Select "Allow Access from Anywhere" (0.0.0.0/0)

### Frontend can't reach Backend
- ✅ Check VITE_API_URL includes `/api` at the end
- ✅ Verify backend URL is correct (https, not http)
- ✅ Check backend CORS settings allow frontend domain
- ✅ Check backend service is running (not sleeping)

### 502 Bad Gateway Error
- ✅ Backend service might be starting up (wait 30-60 seconds)
- ✅ Check backend logs for errors
- ✅ Verify MongoDB connection string

### Build Failed
- ✅ Check build command is correct
- ✅ Verify `package.json` has all dependencies
- ✅ Check Render logs for specific error

---

## 🔄 Updating Your Deployment

1. **Push code to GitHub**
   ```bash
   git add .
   git commit -m "Your changes"
   git push origin main
   ```

2. **Auto-Deploy**
   - Render automatically deploys when you push to GitHub
   - Watch progress in Render dashboard

---

## 💰 Render Free Tier Limits

- ✅ 750 hours/month (plenty for small projects)
- ✅ Services spin down after 15 minutes of inactivity
- ✅ First request after sleeping takes 30-60 seconds
- ✅ Multiple services allowed
- ⚠️ No custom domains on free tier
- ⚠️ Services share resources

---

## 🎯 Alternative: Using Render Blueprint (Faster)

Instead of manual setup, use the included `render.yaml`:

1. Go to Render Dashboard
2. Click **"New +"** → **"Blueprint"**
3. Connect your GitHub repository
4. Render will read `render.yaml` and create both services automatically
5. Just add environment variables when prompted

---

## 📚 Additional Resources

- Render Documentation: https://render.com/docs
- MongoDB Atlas Setup: https://www.mongodb.com/docs/atlas/
- Vite Deployment: https://vitejs.dev/guide/static-deploy.html

---

## ✅ Your Deployed URLs

After deployment, note these URLs:

```
Backend API: https://notes-api.onrender.com
Frontend App: https://notes-client.onrender.com
MongoDB Atlas: Connected ✓
```

**Your app is now live! 🎉**

---

## 🔐 Security Recommendations

For production:
1. ✅ Use environment variables (already done)
2. ✅ Enable HTTPS (Render does this automatically)
3. ✅ Restrict MongoDB network access
4. ✅ Add rate limiting to API
5. ✅ Implement user authentication (future enhancement)
6. ✅ Regular dependency updates

---

## 📞 Need Help?

- Render Community: https://community.render.com
- MongoDB Support: https://www.mongodb.com/community/forums
- GitHub Issues: https://github.com/Ananya21356/notes/issues

