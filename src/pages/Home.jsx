import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import { ArrowRight, Code2, Rocket, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />

        <section className="relative py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 md:grid-cols-3">
              {[{
                title: 'Frontend Engineering',
                desc: 'Delightful, accessible interfaces with React, TypeScript, and modern CSS.',
                icon: Sparkles,
              }, {
                title: 'Backend & APIs',
                desc: 'Scalable, secure services with FastAPI, Node, and databases.',
                icon: Code2,
              }, {
                title: 'Product Velocity',
                desc: 'From idea to MVP quickly with strong UX instincts and automation.',
                icon: Rocket,
              }].map(({ title, desc, icon: Icon }) => (
                <div key={title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-indigo-600/10 p-2 text-indigo-600"><Icon size={20} /></div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-gray-600">{desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Link to="/projects" className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-5 py-3 text-white hover:bg-gray-800">
                Explore projects <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  )
}
