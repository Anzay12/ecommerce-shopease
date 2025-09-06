# Setup Guide - ShopEase E-commerce Application

## Required Software Installation

### 1. Node.js (Must Install)
- **Download:** https://nodejs.org/
- **Version:** 14 ya higher
- **Check:** `node --version` command se verify kar sakte hain

### 2. MongoDB (Must Install)
**Option A - Local Installation:**
- **Download:** https://www.mongodb.com/try/download/community
- **Windows:** MongoDB Community Server install karein
- **Start:** `mongod` command se start karein

**Option B - MongoDB Atlas (Cloud - Easier):**
- **Sign up:** https://www.mongodb.com/atlas
- **Free tier** use kar sakte hain
- Connection string copy karna hoga

### 3. Git (Optional)
- **Download:** https://git-scm.com/
- Code clone karne ke liye

## Step-by-Step Installation

### Step 1: Dependencies Install Karein
```bash
# Root directory mein
npm install

# Sab dependencies install karne ke liye (backend + frontend)
npm run install-all
```

### Step 2: MongoDB Setup
**Local MongoDB:**
```bash
# MongoDB start karein
mongod
```

**MongoDB Atlas:**
- `.env` file mein connection string update karein

### Step 3: Database Seed (Optional)
```bash
cd server
node data/seed.js
```

### Step 4: Application Start Karein
```bash
# Dono backend aur frontend start karein
npm run dev

# Ya separately:
npm run server  # Backend (port 5000)
npm run client  # Frontend (port 3000)
```

## URLs
- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000

## Common Issues aur Solutions

### Issue 1: MongoDB Connection Error
**Solution:**
```bash
# MongoDB service start karein
net start MongoDB
```

### Issue 2: Port Already in Use
**Solution:**
```bash
# Port 3000 ya 5000 ko kill karein
npx kill-port 3000
npx kill-port 5000
```

### Issue 3: Node Modules Error
**Solution:**
```bash
# Clear cache aur reinstall
npm cache clean --force
rm -rf node_modules
npm install
```

## Minimum System Requirements
- **RAM:** 4GB minimum
- **Storage:** 2GB free space
- **OS:** Windows 10/11, macOS, Linux
- **Browser:** Chrome, Firefox, Safari (latest)

## Quick Start Commands
```bash
# 1. Install dependencies
npm run install-all

# 2. Start MongoDB (if local)
mongod

# 3. Start application
npm run dev
```

Bas ye 3 steps follow karein aur application ready ho jayegi!
