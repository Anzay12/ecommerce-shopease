# ShopEase - Modern E-commerce Application

A beautiful, full-stack e-commerce application built with React and Node.js featuring JWT authentication, product management, and shopping cart functionality.

## Features

### Backend (Node.js + Express)
- **JWT Authentication** - Secure user registration and login
- **CRUD APIs** - Complete item management with filtering
- **Cart Management** - Add, remove, and update cart items
- **MongoDB Integration** - Persistent data storage
- **RESTful API** - Clean and organized API endpoints

### Frontend (React)
- **Modern UI** - Beautiful, responsive design with gradients and animations
- **Authentication Pages** - Signup and login with form validation
- **Product Listing** - Grid layout with advanced filtering (price, category, search)
- **Shopping Cart** - Persistent cart with add/remove functionality
- **Responsive Design** - Works perfectly on all devices

### Key Features
- User authentication with JWT tokens
- Product filtering by category, price range, and search
- Shopping cart that persists after logout (localStorage)
- Beautiful, modern UI with smooth animations
- Responsive design for mobile and desktop
- Real-time cart updates
- Form validation and error handling

## Tech Stack

**Backend:**
- Node.js & Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- CORS for cross-origin requests

**Frontend:**
- React 18
- React Router for navigation
- Axios for API calls
- Context API for state management
- CSS3 with modern styling

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd internship_project
```

### 2. Install dependencies
```bash
# Install root dependencies
npm install

# Install all dependencies (backend + frontend)
npm run install-all
```

### 3. Setup MongoDB
Make sure MongoDB is running on your system:
```bash
# Start MongoDB (if installed locally)
mongod
```

### 4. Setup Environment Variables
The `.env` file is already configured in the server directory with default values.

### 5. Seed the database (Optional)
```bash
cd server
node data/seed.js
```

### 6. Start the application
```bash
# Start both backend and frontend
npm run dev

# Or start them separately:
npm run server  # Backend on port 5000
npm run client  # Frontend on port 3000
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user

### Items
- `GET /api/items` - Get all items (with filters)
- `GET /api/items/:id` - Get item by ID
- `POST /api/items` - Create new item
- `PUT /api/items/:id` - Update item
- `DELETE /api/items/:id` - Delete item

### Cart (Protected Routes)
- `GET /api/cart` - Get user's cart
- `POST /api/cart/add` - Add item to cart
- `PUT /api/cart/update/:itemId` - Update item quantity
- `DELETE /api/cart/remove/:itemId` - Remove item from cart
- `DELETE /api/cart/clear` - Clear cart

## UI Features

- **Gradient Backgrounds** - Beautiful purple-blue gradients
- **Card-based Design** - Clean, modern card layouts
- **Hover Effects** - Smooth animations on hover
- **Responsive Grid** - Adaptive product grid
- **Loading States** - Spinner animations
- **Error Handling** - User-friendly error messages
- **Form Validation** - Real-time validation feedback

## Pages

1. **Home Page** - Product listing with filters
2. **Login Page** - User authentication
3. **Signup Page** - User registration
4. **Cart Page** - Shopping cart management

## Customization

### Adding New Categories
Simply add items with new categories through the API, and they'll automatically appear in the filter dropdown.

### Styling
The app uses CSS custom properties and can be easily themed by modifying the color variables in `client/src/index.css`.

### Adding New Features
The modular structure makes it easy to add new features:
- Add new routes in `server/routes/`
- Create new components in `client/src/components/`
- Add new pages in `client/src/pages/`

## Deployment

### Backend Deployment
1. Set up MongoDB Atlas or use a cloud MongoDB service
2. Update environment variables
3. Deploy to Heroku, Vercel, or your preferred platform

### Frontend Deployment
1. Build the React app: `npm run build`
2. Deploy to Netlify, Vercel, or your preferred platform
3. Update API endpoints in production

## License

This project is licensed under the MIT License.

## Contributing

Feel free to submit issues and enhancement requests!

---

**Built with React and Node.js**
