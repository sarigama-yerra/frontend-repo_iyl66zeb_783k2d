import { useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BreedGrid from './components/BreedGrid'
import Footer from './components/Footer'

function App() {
  const shopRef = useRef(null)
  const scrollToShop = () => shopRef.current?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 text-gray-900">
      <Navbar />
      <main className="pt-24">
        <Hero onShopClick={scrollToShop} />
        <div ref={shopRef}>
          <BreedGrid />
        </div>
        <section id="about" className="max-w-7xl mx-auto px-6 py-16">
          <div className="rounded-2xl bg-white/70 backdrop-blur border p-8 grid md:grid-cols-3 gap-6">
            {[{
              title: 'Ethical First',
              text: 'We partner only with registered, humane catteries that prioritize health and socialization.'
            },{
              title: 'Health Guaranteed',
              text: 'All kittens are vet-checked, vaccinated, and come with health records.'
            },{
              title: 'Global Network',
              text: 'Access top rare-breed catteries worldwide with transparent logistics.'
            }].map((f,i)=> (
              <div key={i} className="p-4 rounded-xl border bg-white">
                <h3 className="font-semibold text-lg">{f.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{f.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
