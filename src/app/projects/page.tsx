// app/projects/page.tsx
import type { Metadata } from 'next';
import { ExternalLink } from 'lucide-react';
import { getContentData } from '../utilities/content';
import type { Project } from '@/types';

// NOTE: Metadata is static and remains local.
export const metadata: Metadata = {
  title: "Elijah Luttrell | Projects",
  description: "A showcase of development projects built by Elijah Luttrell.",
};

// ProjectCard component remains a regular component (no changes)
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  // ... (ProjectCard rendering logic remains the same)
  <a 
    href={project.link} 
    target="_blank" 
    rel="noopener noreferrer"
    className="group block p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg dark:shadow-xl dark:shadow-gray-950/20 hover:shadow-2xl hover:shadow-gray-300/50 transition duration-300 transform hover:-translate-y-1 bg-white dark:bg-gray-800 hover:border-brand-primary dark:hover:border-brand-secondary"
  >
    <div className="flex justify-between items-start">
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-brand-primary dark:group-hover:text-brand-secondary transition duration-300">
          {project.title}
        </h3>
        <ExternalLink className="h-5 w-5 ml-4 text-gray-400 group-hover:text-brand-primary dark:group-hover:text-brand-secondary"/>
    </div>
    
    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
      {project.description}
    </p>
    
    <div className="flex flex-wrap gap-2 mt-4">
      {project.technologies.map((tech) => (
        <span 
          key={tech} 
          className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
        >
          {tech}
        </span>
      ))}
    </div>
  </a>
);

// Convert to an async function to fetch project data
export default async function ProjectsPage() {
  // Fetch project data from the API
  const data = await getContentData();
  const projects = data.projects as Project[]; // Type assertion for safety

  return (
    <div className="w-full max-w-4xl mx-auto"> 
      
      {/* Page Title (Static text for now) */}
      <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">
              My Work
          </h1>
          <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
              A selection of applications and libraries built with modern web technologies.
          </p>
      </header>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project: Project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>

    </div>
  );
}