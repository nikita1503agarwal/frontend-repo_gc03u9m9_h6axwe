import { ShieldPlus } from 'lucide-react'

export default function CTA() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white p-10 md:p-14">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(600px_200px_at_10%_-10%,rgba(99,102,241,0.6),transparent),radial-gradient(600px_200px_at_90%_110%,rgba(59,130,246,0.6),transparent)]" />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-black tracking-tight">Level up your rotation.</h3>
            <p className="mt-2 text-slate-300 max-w-2xl">Join the Sneaker Protect club for early drops, care tips, and exclusive bundles.</p>
            <form className="mt-6 flex flex-col sm:flex-row gap-3">
              <input type="email" placeholder="Enter your email" className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 placeholder:text-slate-300/60 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-slate-900 px-5 py-3 font-medium hover:bg-slate-100">
                <ShieldPlus size={18} /> Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
