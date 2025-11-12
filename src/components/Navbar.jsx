import { useState } from 'react'
import { Menu, X, ShieldHalf, ShoppingCart } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = (label, href = '#') => (
    <a href={href} className="text-sm md:text-base text-slate-700 hover:text-slate-900 transition-colors">
      {label}
    </a>
  )

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/20 bg-white/70 backdrop-blur-md shadow-md">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow">
                <ShieldHalf size={20} />
              </span>
              <div className="leading-tight">
                <p className="font-semibold text-slate-900">Sneaker Protect</p>
                <p className="text-[11px] uppercase tracking-widest text-slate-500">Shield Your Heat</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItem('Products', '#products')}
              {navItem('Why Us', '#features')}
              {navItem('Reviews', '#reviews')}
              {navItem('Support', '#support')}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#products" className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-white hover:bg-slate-800 transition-colors">
                <ShoppingCart size={18} />
                <span className="text-sm font-medium">Shop</span>
              </a>
            </div>

            <button aria-label="Toggle Menu" className="md:hidden inline-flex items-center justify-center rounded-xl border border-slate-200 p-2 text-slate-700" onClick={() => setOpen(v => !v)}>
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4 flex flex-col gap-3">
              {navItem('Products', '#products')}
              {navItem('Why Us', '#features')}
              {navItem('Reviews', '#reviews')}
              {navItem('Support', '#support')}
              <a href="#products" className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-white">
                <ShoppingCart size={18} />
                <span className="text-sm font-medium">Shop</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
