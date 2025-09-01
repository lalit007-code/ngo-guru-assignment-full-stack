import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import AuthPage from './pages/AuthPage'
import ProductsPage from './pages/ProductsPage'
import AdminPage from './pages/AdminPage'
import HealthPage from './pages/HealthPage'
import './App.css'

function App() {
  const [user, setUser] = useState(null)

  const handleLogout = () => {
    setUser(null)
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar user={user} onLogout={handleLogout} />
        <div className="max-w-6xl mx-auto p-4">
          <Routes>
            <Route path="/" element={<HomePage user={user} />} />
            <Route path="/auth" element={<AuthPage onAuthSuccess={setUser} />} />
            <Route path="/products" element={<ProductsPage user={user} />} />
            <Route path="/admin" element={<AdminPage user={user} />} />
            <Route path="/health" element={<HealthPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;
