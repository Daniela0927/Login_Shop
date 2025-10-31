import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState('admin@example.com')
  const [password, setPassword] = useState('password')

  function handleSubmit(e) {
    e.preventDefault()
    // simple fake auth
    if (email && password) {
      localStorage.setItem('token', 'demo-token')
      router.push('/dashboard')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow">
        <h1 className="text-2xl font-semibold mb-4">Mobile Admin Shop</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input value={email} onChange={e => setEmail(e.target.value)} className="mt-1 block w-full px-3 py-2 border rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="mt-1 block w-full px-3 py-2 border rounded" />
          </div>
          <div className="flex items-center justify-between">
            <button className="px-4 py-2 bg-blue-600 text-white rounded">Iniciar sesión</button>
            <a className="text-sm text-gray-500">¿Olvidaste la contraseña?</a>
          </div>
        </form>
      </div>
    </div>
  )
}
