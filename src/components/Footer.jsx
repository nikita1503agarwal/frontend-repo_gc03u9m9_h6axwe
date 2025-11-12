export default function Footer() {
  return (
    <footer id="support" className="relative py-12 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
          <div>
            <p className="font-semibold text-slate-900">Sneaker Protect</p>
            <p className="mt-2 text-slate-600">Security-inspired gear for your sneakers. Designed for comfort. Built to last.</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Support</p>
            <ul className="mt-2 space-y-2 text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-slate-900">Warranty</a></li>
              <li><a href="#" className="hover:text-slate-900">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Company</p>
            <ul className="mt-2 space-y-2 text-slate-600">
              <li><a href="#" className="hover:text-slate-900">About</a></li>
              <li><a href="#" className="hover:text-slate-900">Careers</a></li>
              <li><a href="#" className="hover:text-slate-900">Privacy</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Follow</p>
            <ul className="mt-2 space-y-2 text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Instagram</a></li>
              <li><a href="#" className="hover:text-slate-900">TikTok</a></li>
              <li><a href="#" className="hover:text-slate-900">Twitter</a></li>
            </ul>
          </div>
        </div>
        <p className="mt-10 text-xs text-slate-500">© {new Date().getFullYear()} Sneaker Protect. All rights reserved.</p>
      </div>
    </footer>
  )
}
