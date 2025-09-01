import { useState } from 'react'

function ProductCard({ product, isAdmin, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editForm, setEditForm] = useState({
    title: product.title,
    description: product.description,
    price: product.price
  })

  const handleUpdate = (e) => {
    e.preventDefault()
    onUpdate(product._id, editForm)
    setIsEditing(false)
  }

  return (
    <div className="border rounded-lg p-4 bg-gray-50">
      {isEditing ? (
        <form onSubmit={handleUpdate} className="space-y-2">
          <input
            type="text"
            value={editForm.title}
            onChange={(e) => setEditForm({...editForm, title: e.target.value})}
            className="w-full p-1 border rounded text-sm"
          />
          <input
            type="text"
            value={editForm.description}
            onChange={(e) => setEditForm({...editForm, description: e.target.value})}
            className="w-full p-1 border rounded text-sm"
          />
          <input
            type="text"
            value={editForm.price}
            onChange={(e) => setEditForm({...editForm, price: e.target.value})}
            className="w-full p-1 border rounded text-sm"
          />
          <div className="flex gap-2">
            <button type="submit" className="bg-green-500 text-white px-2 py-1 rounded text-sm">
              Save
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="bg-gray-500 text-white px-2 py-1 rounded text-sm"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div>
          <h4 className="font-semibold">{product.title}</h4>
          <p className="text-sm text-gray-600 mb-2">{product.description}</p>
          <p className="font-bold text-green-600">${product.price}</p>
          {isAdmin && (
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-500 text-white px-2 py-1 rounded text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(product._id)}
                className="bg-red-500 text-white px-2 py-1 rounded text-sm"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default ProductCard