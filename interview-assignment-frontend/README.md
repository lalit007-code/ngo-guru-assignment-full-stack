# Interview Assignment Frontend

A React frontend application that interfaces with the backend API to provide a complete product management system.

## Features

- **Health Check**: Test server connectivity
- **User Authentication**: Register and login with role-based access
- **Product Management**: View, search, and manage products
- **Admin Features**: Create, update, and delete products (admin only)
- **Responsive Design**: Works on desktop and mobile devices

## API Endpoints Covered

- `GET /api/v1/healthcheck/` - Server health check
- `POST /api/v1/user/register` - User registration
- `POST /api/v1/user/login` - User login
- `GET /api/v1/products/` - Get products with search and pagination
- `POST /api/v1/admin/adminData` - Create product (admin only)
- `PATCH /api/v1/products/:id` - Update product (admin only)
- `DELETE /api/v1/products/:id` - Delete product (admin only)

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Make sure your backend is running on `http://localhost:5000`

## Usage

1. **Health Check**: Click the "Check Server Health" button to verify backend connectivity
2. **Authentication**: Register a new account or login with existing credentials
3. **View Products**: Browse and search through available products
4. **Admin Functions**: If logged in as admin, you can create, edit, and delete products

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- Axios for API calls