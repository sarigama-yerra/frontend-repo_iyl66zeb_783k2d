import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function BreedGrid() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/cats`)
        const data = await res.json()
        setItems(data.items || [])
      } catch (e) {
        setItems([])
      } finally {
        setLoading(false)
      }
    }
    fetchCats()
  }, [])

  if (loading) return <div className="grid place-items-center py-20">Loading breeds...</div>

  const display = items.length > 0 ? items : [
    { id: '1', name: 'Bengal', breed: 'Bengal', price: 2500, image: '/cats/cat1.jpg', temperament: ['Active','Curious'] },
    { id: '2', name: 'Sphynx', breed: 'Sphynx', price: 3200, image: '/cats/cat2.jpg', temperament: ['Affectionate','Playful'] },
    { id: '3', name: 'Savannah', breed: 'Savannah', price: 5000, image: '/cats/cat3.jpg', temperament: ['Energetic','Smart'] },
    { id: '4', name: 'Scottish Fold', breed: 'Scottish Fold', price: 2800, image: '/cats/cat4.jpg', temperament: ['Calm','Loyal'] },
  ]

  return (
    <section id="breeds" className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Featured Breeds</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {display.map(cat => (
          <div key={cat.id} className="group rounded-2xl overflow-hidden bg-white border shadow-sm hover:shadow-xl transition">
            <div className="relative">
              <img src={cat.image} alt={cat.breed} className="w-full aspect-square object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">{cat.breed}</h3>
                <span className="text-purple-700 font-bold">${cat.price.toLocaleString()}</span>
              </div>
              <div className="mt-2 text-sm text-gray-600 line-clamp-2">{cat.description || 'Healthy, registered, and socialized kittens from certified breeders.'}</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {(cat.temperament || []).slice(0,3).map((t,i)=> (
                  <span key={i} className="text-xs px-2 py-1 rounded-full bg-purple-50 text-purple-700">{t}</span>
                ))}
              </div>
              <button className="mt-4 w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-2 rounded-lg">Inquire</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
