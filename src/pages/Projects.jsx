import Navbar from '../components/Navbar'
import ProjectCard from '../components/ProjectCard'
import { useEffect, useState } from 'react'

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/projects`)
        const data = await res.json()
        setProjects(data)
      } catch (e) {
        setProjects([])
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-24">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Selected Projects</h1>
          <p className="mt-2 max-w-2xl text-gray-600">A few things I’ve built recently. More available on request.</p>

          {loading ? (
            <p className="mt-8 text-gray-600">Loading...</p>
          ) : (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <ProjectCard key={p.title} title={p.title} description={p.description} tags={p.tags} links={{ repo: p.repo, demo: p.demo }} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
