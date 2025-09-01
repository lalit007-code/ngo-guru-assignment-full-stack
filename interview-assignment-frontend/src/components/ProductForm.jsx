import { useState } from 'react'
import axiosInstance from '../api/axiosInstance'

function ProductForm({ onProductCreated }) {
  const [productForm, setProductForm] = useState({ title: '', description: '', price: '' })

  const handleCreateProduct = async (e) => {
    e.preventDefault()
    try {
      await axiosInstance.post('api/v1/admin/adminData', productForm)
      setProductForm({ title: '', description: '', price: '' })
      onProductCreated()
      alert('Product created successfully')
    } catch (error) {
      alert(error.response?.data?.message || 'Failed to create product')
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6">
      <h3 className="text-lg font-semibold mb-4">Create Product (Admin)</h3>
      <form onSubmit={handleCreateProduct} className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <input
          type="text"
          placeholder="Title"
          value={productForm.title}
          onChange={(e) => setProductForm({...productForm, title: e.target.value})}
          className="p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={productForm.description}
          onChange={(e) => setProductForm({...productForm, description: e.target.value})}
          className="p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Price"
          value={productForm.price}
          onChange={(e) => setProductForm({...productForm, price: e.target.value})}
          className="p-2 border rounded"
          required
        />
        <button type="submit" className="bg-green-500 text-white p-2 rounded hover:bg-green-600">
          Create Product
        </button>
      </form>
    </div>
  )
}

export default ProductForm