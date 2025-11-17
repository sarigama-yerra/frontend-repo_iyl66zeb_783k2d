import { Menu, ShoppingCart, Cat } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between gap-4 rounded-xl mt-4 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50 border border-white/60 shadow-sm px-4 py-3">
          <div className="flex items-center gap-2">
            <Cat className="w-6 h-6 text-pink-600" />
            <span className="font-bold">RareCats</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#breeds" className="hover:text-purple-600">Breeds</a>
            <a href="#about" className="hover:text-purple-600">About</a>
            <a href="#contact" className="hover:text-purple-600">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="relative inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-3 py-2 rounded-lg text-sm shadow">
              <ShoppingCart className="w-4 h-4" /> Cart
            </button>
            <button className="md:hidden p-2 rounded-lg border">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
