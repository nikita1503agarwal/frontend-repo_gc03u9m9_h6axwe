import { Star, Check, Zap } from 'lucide-react'

const products = [
  {
    id: 'cp-classic',
    name: 'Crease Protect Classic',
    price: 12.99,
    badge: 'Best Seller',
    features: ['Breathable vents', 'Trim-to-fit edges', 'No-slip texture'],
  },
  {
    id: 'cp-pro',
    name: 'Crease Protect Pro+',
    price: 18.99,
    badge: 'Pro',
    features: ['Extra soft liner', 'Reinforced shield', 'All-day comfort'],
  },
  {
    id: 'sp-kit',
    name: 'Sneaker Care Kit',
    price: 22.0,
    badge: 'Bundle',
    features: ['Cleaning solution', 'Premium brush', 'Microfiber towel'],
  },
]

export default function Products() {
  return (
    <section id="products" className="relative py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">Featured Products</h2>
            <p className="mt-3 text-slate-600">Built to protect your sneakers without compromising comfort.</p>
          </div>
          <div className="hidden sm:flex items-center gap-1 text-amber-500">
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <Star size={18} />
            <span className="ml-2 text-sm text-slate-600">4.6/5 rated by buyers</span>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.id} className="group rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">{p.badge}</span>
                <span className="inline-flex items-center gap-1 text-blue-600 text-xs">
                  <Zap size={14} /> In stock
                </span>
              </div>
              <div className="mt-4 aspect-[4/3] rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200" />
              <h3 className="mt-4 font-semibold text-slate-900">{p.name}</h3>
              <p className="mt-1 text-slate-700">${p.price.toFixed(2)}</p>
              <ul className="mt-3 space-y-1 text-sm text-slate-600">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2"><Check size={16} className="text-emerald-600" /> {f}</li>
                ))}
              </ul>
              <button className="mt-5 w-full rounded-xl bg-slate-900 text-white py-2.5 font-medium hover:bg-slate-800 transition-colors">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
