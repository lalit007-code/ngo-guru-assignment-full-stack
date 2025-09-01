import { Link } from 'react-router-dom'

function HomePage({ user }) {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to Product Management System</h1>
      {user ? (
        <div className="space-y-4">
          <p className="text-lg">Hello, {user.username}! ({user.role})</p>
          <div className="flex justify-center gap-4">
            <Link to="/products" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
              View Products
            </Link>
            {user.role === 'admin' && (
              <Link to="/admin" className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600">
                Admin Panel
              </Link>
            )}
          </div>
        </div>
      ) : (
        <div>
          <p className="text-lg mb-4">Please login to access the system</p>
          <Link to="/auth" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
            Login / Register
          </Link>
        </div>
      )}
    </div>
  )
}

export default HomePage