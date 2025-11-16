import Navbar from '../components/Navbar'
import { Code2, Cpu, Database, Globe, Terminal } from 'lucide-react'

const skills = [
  { name: 'JavaScript/TypeScript', icon: Terminal },
  { name: 'React, Vite', icon: Code2 },
  { name: 'FastAPI, Node', icon: Cpu },
  { name: 'MongoDB, SQL', icon: Database },
  { name: 'CI/CD, Docker', icon: Globe },
]

export default function Profile() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-10 md:grid-cols-[280px,1fr]">
            <aside className="rounded-2xl border border-gray-200 p-6">
              <div className="h-24 w-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500" />
              <h1 className="mt-4 text-2xl font-bold">Your Name</h1>
              <p className="text-gray-600">Software Engineer</p>
              <p className="mt-3 text-sm text-gray-600">I build thoughtful products with a user-first mindset and a love for clean code.</p>
            </aside>

            <section className="space-y-8">
              <div className="rounded-2xl border border-gray-200 p-6">
                <h2 className="text-lg font-semibold">Skills</h2>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {skills.map(({ name, icon: Icon }) => (
                    <div key={name} className="flex items-center gap-2 rounded-lg border border-gray-200 p-3 text-sm">
                      <Icon size={16} className="text-indigo-600" /> {name}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 p-6">
                <h2 className="text-lg font-semibold">Experience</h2>
                <ul className="mt-3 space-y-3 text-sm text-gray-700">
                  <li>• Senior Engineer at AwesomeCo — Lead frontend architecture and design systems</li>
                  <li>• Full-stack Engineer at StartupX — Built real-time features and APIs</li>
                  <li>• Open Source Contributor — Libraries, docs, and community support</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-gray-200 p-6">
                <h2 className="text-lg font-semibold">Education</h2>
                <p className="mt-2 text-sm text-gray-700">B.S. in Computer Science — University of Somewhere</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
