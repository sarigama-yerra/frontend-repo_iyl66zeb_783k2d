import { motion } from 'framer-motion'
import { Cat, PawPrint, ShoppingBag } from 'lucide-react'

export default function Hero({ onShopClick }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 opacity-50" />
      <div className="relative max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur px-3 py-1 rounded-full text-sm mb-4">
            <PawPrint className="w-4 h-4 text-pink-600" />
            <span>Rare & Ethical Catteries</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight text-gray-900">
            Find Your Dream
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600">Rare Cat</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700 max-w-xl">
            Curated selection of certified rare breeds from trusted, ethical breeders worldwide. Health-checked, socialized, and absolutely adorable.
          </p>
          <div className="mt-8 flex justify-center lg:justify-start gap-4">
            <button onClick={onShopClick} className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-5 py-3 rounded-lg shadow-lg hover:shadow-xl transition">
              <ShoppingBag className="w-5 h-5" /> Shop breeds
            </button>
            <a href="#about" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-gray-300 bg-white/70 backdrop-blur hover:bg-white transition">
              <Cat className="w-5 h-5 text-purple-600" /> Learn more
            </a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="flex-1 grid grid-cols-2 gap-4">
          {["/cats/cat1.jpg","/cats/cat2.jpg","/cats/cat3.jpg","/cats/cat4.jpg"].map((src,i)=> (
            <img key={i} src={src} alt="Rare cat" className="rounded-2xl shadow-xl object-cover aspect-square" />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
