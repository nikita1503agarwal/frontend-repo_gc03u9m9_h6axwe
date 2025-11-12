import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-32 pb-16 md:pb-24">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white" />

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl font-black tracking-tight text-slate-900"
              >
                Guard your sneakers.
                <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Keep the drip crease-free.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-5 text-slate-600 text-lg md:text-xl max-w-xl"
              >
                Sneaker Protect builds comfort-fit crease guards and premium accessories designed to extend the life of your kicks—without sacrificing style.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="mt-8 flex flex-col sm:flex-row gap-3"
              >
                <a href="#products" className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-white font-medium shadow hover:bg-slate-800 transition-colors">
                  Shop Crease Protectors
                </a>
                <a href="#features" className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-slate-800 font-medium hover:border-slate-400 transition-colors bg-white">
                  Why Sneaker Protect?
                </a>
              </motion.div>

              <div className="mt-8 flex items-center gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                  Trusted by thousands of sneakerheads
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-blue-600" />
                  30-day comfort guarantee
                </div>
              </div>
            </div>

            <div className="relative h-[420px] md:h-[520px] rounded-3xl">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-600/10 to-indigo-600/10" />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-white/40" />
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_400px_at_20%_0%,rgba(59,130,246,0.10),transparent),radial-gradient(800px_300px_at_80%_10%,rgba(79,70,229,0.10),transparent)]" />
    </section>
  )
}
