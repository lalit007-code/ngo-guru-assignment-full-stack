import { useState, useEffect } from 'react'
import axiosInstance from '../api/axiosInstance'
import ProductCard from './ProductCard'

function ProductList({ user }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const response = await axiosInstance.get(`/api/v1/products?search=${searchTerm}`)
      setProducts(response.data.data.products)
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteProduct = async (productId) => {
    try {
      await axiosInstance.delete(`/api/v1/products/${productId}`)
      fetchProducts()
      alert('Product deleted successfully')
    } catch (error) {
      alert(error.response?.data?.message || 'Failed to delete product')
    }
  }

  const handleUpdateProduct = async (productId, updatedData) => {
    try {
      await axiosInstance.patch(`/api/v1/products/${productId}`, updatedData)
      fetchProducts()
      alert('Product updated successfully')
    } catch (error) {
      alert(error.response?.data?.message || 'Failed to update product')
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 p-2 border rounded"
        />
        <button
          onClick={fetchProducts}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      <h3 className="text-lg font-semibold mb-4">Products</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              isAdmin={user?.role === 'admin'}
              onDelete={handleDeleteProduct}
              onUpdate={handleUpdateProduct}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductList