import { useState } from 'react'
import axiosInstance from '../api/axiosInstance'

function HealthCheck() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const checkHealth = async () => {
    try {
      setLoading(true)
      const response = await axiosInstance.get('api/v1/healthcheck')
      setStatus({ success: true, message: response.data.message })
    } catch (error) {
      setStatus({ success: false, message: 'Server is down' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-4">
      <div className="flex items-center gap-4">
        <button
          onClick={checkHealth}
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? 'Checking...' : 'Check Server Health'}
        </button>
        {status && (
          <div className={`px-3 py-1 rounded ${status.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {status.message}
          </div>
        )}
      </div>
    </div>
  )
}

export default HealthCheck