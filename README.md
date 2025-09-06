🛒 ShopEase – Modern E-commerce Application

A full-stack e-commerce platform built with React and Node.js, featuring secure authentication, product management, shopping cart functionality, and a modern responsive UI. This project demonstrates end-to-end web development with a scalable architecture and clean code practices.

✨ Features
🔐 Authentication & Security

JWT-based user authentication (register, login, protected routes)

Password hashing with bcryptjs

Token-based session management

🛍️ Product Management

Full CRUD operations with advanced filtering (category, price, search)

Product details with name, description, price, category, and images

Support for multiple categories (Electronics, Sports, Home, Accessories)

🛒 Shopping Cart

Add, remove, and update item quantities

Persistent cart using localStorage (remains after logout)

Real-time cart updates

🎨 User Interface

Responsive, modern UI with gradients, animations, and hover effects

Card-based product layout

Smooth navigation using React Router

Optimized for desktop, tablet, and mobile

🛠️ Tech Stack

Frontend

React 18, React Router, Context API

Axios for API calls

CSS3 with custom styling

Backend

Node.js + Express.js

MongoDB with Mongoose

JWT for authentication, bcryptjs for password hashing

CORS for secure API communication

🚀 Installation & Setup
Prerequisites

Node.js (v14+)

MongoDB (local or MongoDB Atlas)

npm or yarn

Steps
# 1. Clone repository
git clone <your-repo-url>
cd shopease

# 2. Install dependencies
npm install        # Root
npm run install-all # Backend + Frontend

# 3. Start MongoDB (if local)
mongod

# 4. Setup environment variables
# Create .env file in /server with values (DB_URI, JWT_SECRET, etc.)

# 5. Seed database (optional)
cd server && node data/seed.js

# 6. Run app
npm run dev        # Start frontend + backend together
npm run server     # Start backend only (port 5000)
npm run client     # Start frontend only (port 3000)

📡 API Endpoints
Authentication

POST /api/auth/register – Register user

POST /api/auth/login – User login

GET /api/auth/me – Current user

Products

GET /api/items – Fetch all items (with filters)

GET /api/items/:id – Get item by ID

POST /api/items – Create product

PUT /api/items/:id – Update product

DELETE /api/items/:id – Delete product

Cart (Protected)

GET /api/cart – Get user cart

POST /api/cart/add – Add item

PUT /api/cart/update/:itemId – Update quantity

DELETE /api/cart/remove/:itemId – Remove item

DELETE /api/cart/clear – Clear cart

📱 Pages

Home – Product listing with filters

Login / Signup – Authentication pages

Cart – Shopping cart management

🎨 UI Features

Gradient backgrounds

Responsive grid & card design

Hover animations

Loading spinners

Real-time validation & error handling

🛠️ Customization

New Categories → Add via API, auto-reflect in filters

Styling → Update client/src/index.css for theming

Extend Features → Add new routes (server) or components (client)

🌍 Deployment
Backend

Use MongoDB Atlas (or any cloud DB)

Update .env with production values

Deploy via Heroku, Render, or Vercel

Frontend
npm run build


Deploy build folder to Netlify, Vercel, or similar.

📜 License

This project is licensed under the MIT License.

🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to fork this repo and submit pull requests.

💡 Built with React & Node.js to showcase modern full-stack development
