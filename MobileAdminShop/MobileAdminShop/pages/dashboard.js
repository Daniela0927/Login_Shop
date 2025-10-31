import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Sidebar = () => (
  <aside className="w-56 bg-white p-4 border-r min-h-screen">
    <h2 className="font-bold text-lg mb-4">Admin</h2>
    <nav className="flex flex-col space-y-2">
      <Link href="/dashboard"><a className="py-2 px-3 rounded hover:bg-gray-100">Dashboard</a></Link>
      <Link href="/products"><a className="py-2 px-3 rounded hover:bg-gray-100">Productos</a></Link>
      <Link href="/orders"><a className="py-2 px-3 rounded hover:bg-gray-100">Pedidos</a></Link>
      <Link href="/users"><a className="py-2 px-3 rounded hover:bg-gray-100">Usuarios</a></Link>
    </nav>
  </aside>
)

export default function Dashboard() {
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) router.push('/')
  }, [])

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <div>
            <button onClick={() => { localStorage.removeItem('token'); router.push('/') }} className="px-3 py-1 border rounded">Cerrar sesión</button>
          </div>
        </header>

        <section className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">Total Productos<br/><span className="text-2xl font-bold">24</span></div>
          <div className="bg-white p-4 rounded shadow">Pedidos<br/><span className="text-2xl font-bold">18</span></div>
          <div className="bg-white p-4 rounded shadow">Usuarios<br/><span className="text-2xl font-bold">320</span></div>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Actividad reciente</h2>
          <div className="bg-white p-4 rounded shadow">No hay actividad real — esta es una demo.</div>
        </section>
      </main>
    </div>
  )
}
