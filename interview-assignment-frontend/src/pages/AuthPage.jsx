import { useNavigate } from 'react-router-dom'
import AuthForm from '../components/AuthForm'

function AuthPage({ onAuthSuccess }) {
  const navigate = useNavigate()

  const handleAuthSuccess = (user) => {
    onAuthSuccess(user)
    navigate('/')
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">Authentication</h1>
      <AuthForm onAuthSuccess={handleAuthSuccess} />
    </div>
  )
}

export default AuthPage