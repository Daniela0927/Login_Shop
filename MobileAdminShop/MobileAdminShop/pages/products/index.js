import { useEffect, useState } from 'react'
import Link from 'next/link'
import sample from '../../data/products.json'

export default function Products() {
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(sample)
  }, [])

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-semibold">Productos</h1>
          <Link href="/products/new"><a className="px-3 py-1 bg-blue-600 text-white rounded">Nuevo</a></Link>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {items.map(p => (
            <div key={p.id} className="bg-white p-4 rounded shadow">
              <img src={p.image} alt={p.name} className="h-32 w-full object-cover rounded mb-2" />
              <div className="font-semibold">{p.name}</div>
              <div className="text-sm text-gray-500">${p.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
