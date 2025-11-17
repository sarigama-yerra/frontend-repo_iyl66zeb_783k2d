export default function Footer(){
  return (
    <footer id="contact" className="border-t bg-white/70 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h4 className="font-semibold text-gray-900">RareCats</h4>
          <p className="text-gray-600 mt-2">Ethical rare-breed marketplace connecting responsible breeders with loving homes.</p>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Breeds</h5>
          <ul className="space-y-1 text-gray-600 text-sm">
            <li>Bengal</li>
            <li>Sphynx</li>
            <li>Savannah</li>
            <li>Scottish Fold</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Company</h5>
          <ul className="space-y-1 text-gray-600 text-sm">
            <li>About</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Newsletter</h5>
          <p className="text-gray-600 text-sm">Get alerts when new kittens are available.</p>
          <div className="mt-3 flex gap-2">
            <input placeholder="Email address" className="flex-1 border rounded-lg px-3 py-2" />
            <button className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-4 rounded-lg">Join</button>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 py-4">© {new Date().getFullYear()} RareCats. All rights reserved.</div>
    </footer>
  )
}
