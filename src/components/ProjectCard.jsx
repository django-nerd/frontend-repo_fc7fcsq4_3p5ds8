import { Github, ExternalLink } from 'lucide-react'

export default function ProjectCard({ title, description, tags = [], links = {} }) {
  return (
    <div className="group rounded-2xl border border-gray-200/60 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="mt-2 text-sm text-gray-600">{description}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">{t}</span>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-3">
        {links.repo && (
          <a href={links.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900">
            <Github size={16} /> Code
          </a>
        )}
        {links.demo && (
          <a href={links.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900">
            <ExternalLink size={16} /> Live
          </a>
        )}
      </div>
    </div>
  )
}
