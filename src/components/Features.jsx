import { ShieldCheck, Sparkles, Footprints, Scissors, ThermometerSun, Leaf } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Anti-Crease Engineering',
    desc: 'Ergonomic shell distributes pressure so your toe box stays crisp.',
  },
  { icon: Sparkles, title: 'Invisible Comfort', desc: 'Featherlight with breathable vents—wear and forget.' },
  { icon: Scissors, title: 'Trim-to-Fit', desc: 'Customizable edges for a snug fit in any sneaker.' },
  { icon: ThermometerSun, title: 'Heat Resistant', desc: 'Keeps shape through hot days and long wear.' },
  { icon: Leaf, title: 'Non-Toxic Materials', desc: 'Skin-safe, odorless, and responsibly sourced.' },
  { icon: Footprints, title: 'No-Slip Texture', desc: 'Stays in place—no crunch, no slide.' },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">Why Sneaker Protect</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Designed with a security-grade mindset for everyday wear. Technology meets street.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl bg-white/70 backdrop-blur border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-1 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
