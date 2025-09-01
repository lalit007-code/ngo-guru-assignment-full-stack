import ProductList from '../components/ProductList'

function ProductsPage({ user }) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">Products</h1>
      <ProductList user={user} />
    </div>
  )
}

export default ProductsPage