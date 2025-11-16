import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/70 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" /> Open to opportunities
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            Building playful, modern web experiences.
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            I craft robust frontends, scalable backends, and everything in between. Explore selected projects and get to know my work.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link to="/projects" className="group inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-gray-900 shadow hover:shadow-lg transition">
              View Projects <ArrowRight className="transition-transform group-hover:translate-x-0.5" size={18} />
            </Link>
            <Link to="/profile" className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10 transition">
              About Me
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
