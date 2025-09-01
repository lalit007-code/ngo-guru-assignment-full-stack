import { Link } from 'react-router-dom'

function Navbar({ user, onLogout }) {
  return (
    <nav className="bg-white shadow-md p-4 mb-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Product Management</Link>
        <div className="flex items-center gap-4">
          <Link to="/health" className="text-blue-500 hover:underline">Health Check</Link>
          {user ? (
            <>
              <Link to="/products" className="text-blue-500 hover:underline">Products</Link>
              {user.role === 'admin' && (
                <Link to="/admin" className="text-blue-500 hover:underline">Admin</Link>
              )}
              <span>Welcome, {user.username}!</span>
              <button
                onClick={onLogout}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/auth" className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar