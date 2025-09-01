import { useState } from 'react'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'
import UserManagement from '../components/UserManagement'

function AdminPage({ user }) {
  const [refreshKey, setRefreshKey] = useState(0)
  const [activeTab, setActiveTab] = useState('products')

  const handleProductCreated = () => {
    setRefreshKey(prev => prev + 1)
  }

  if (user?.role !== 'admin') {
    return (
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Access Denied</h1>
        <p>You need admin privileges to access this page.</p>
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">Admin Panel</h1>
      
      <div className="mb-6">
        <div className="flex gap-4 border-b">
          <button
            onClick={() => setActiveTab('products')}
            className={`px-4 py-2 ${activeTab === 'products' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'}`}
          >
            Product Management
          </button>
          <button
            onClick={() => setActiveTab('users')}
            className={`px-4 py-2 ${activeTab === 'users' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'}`}
          >
            User Management
          </button>
        </div>
      </div>

      {activeTab === 'products' ? (
        <div>
          <ProductForm onProductCreated={handleProductCreated} />
          <ProductList key={refreshKey} user={user} />
        </div>
      ) : (
        <UserManagement />
      )}
    </div>
  )
}

export default AdminPage