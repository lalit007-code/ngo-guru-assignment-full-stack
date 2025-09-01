import HealthCheck from '../components/HealthCheck'

function HealthPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">Server Health Check</h1>
      <HealthCheck />
    </div>
  )
}

export default HealthPage