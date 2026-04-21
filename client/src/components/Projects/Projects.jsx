import { useState } from 'react';
import SectionWrapper from '../common/SectionWrapper';
import { Github, ExternalLink, Layers } from 'lucide-react';

const projects = [
  {
    title: 'ShopCart – E-Commerce Platform',
    description:
      'A full-featured e-commerce platform with product listings, cart management, user authentication, payment integration (Razorpay), and an admin dashboard. Built end-to-end with MERN stack.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Razorpay', 'JWT'],
    github: 'https://github.com/yourusername/shopcart',
    live: 'https://shopcart-demo.vercel.app',
    category: 'Fullstack',
    gradient: 'from-primary-600/20 to-purple-600/20',
    accent: '#6366f1',
    emoji: '🛒',
    featured: true,
  },
  {
    title: 'TaskFlow – Project Manager',
    description:
      'A Trello-inspired project management app with drag-and-drop boards, real-time collaboration via Socket.io, and team member assignment. Includes Kanban view.',
    tags: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'DnD Kit'],
    github: 'https://github.com/yourusername/taskflow',
    live: 'https://taskflow-demo.vercel.app',
    category: 'Fullstack',
    gradient: 'from-accent-500/20 to-teal-600/20',
    accent: '#10b981',
    emoji: '📋',
    featured: true,
  },
  {
    title: 'BlogSpace – CMS & Blog',
    description:
      'A full-stack blogging platform with Markdown editor, category filtering, author profiles, comment system, and SEO-optimized rendering.',
    tags: ['React', 'Express', 'MongoDB', 'Cloudinary', 'Markdown'],
    github: 'https://github.com/yourusername/blogspace',
    live: 'https://blogspace-demo.vercel.app',
    category: 'Fullstack',
    gradient: 'from-yellow-500/20 to-orange-600/20',
    accent: '#f59e0b',
    emoji: '✍️',
    featured: false,
  },
  {
    title: 'ChatApp – Real-time Messaging',
    description:
      'Real-time chat application with WebSocket support, private & group rooms, message history, and online status indicators.',
    tags: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/chatapp',
    live: 'https://chatapp-demo.vercel.app',
    category: 'Fullstack',
    gradient: 'from-pink-500/20 to-rose-600/20',
    accent: '#ec4899',
    emoji: '💬',
    featured: false,
  },
  {
    title: 'WeatherNow – Weather App',
    description:
      'Clean weather dashboard using OpenWeather API with 5-day forecasts, location search, and animated weather conditions.',
    tags: ['React', 'OpenWeather API', 'CSS Modules'],
    github: 'https://github.com/yourusername/weathernow',
    live: 'https://weathernow-demo.vercel.app',
    category: 'Frontend',
    gradient: 'from-blue-500/20 to-cyan-600/20',
    accent: '#3b82f6',
    emoji: '🌤️',
    featured: false,
  },
];

const FILTERS = ['All', 'Fullstack', 'Frontend'];

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <SectionWrapper id="projects">
      <div className="text-center mb-12">
        <p className="section-subheading">What I've Built</p>
        <h2 className="section-heading">
          My <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-8">
          A selection of projects I've built to sharpen my skills and solve real problems.
        </p>

        {/* Filter tabs */}
        <div className="inline-flex items-center gap-2 p-1.5 bg-white/5 border border-white/10 rounded-xl">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                filter === f
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-900/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project, i) => (
          <div
            key={project.title}
            className="card-glass p-6 flex flex-col group"
            style={{
              animationDelay: `${i * 0.1}s`,
              borderColor: project.featured ? `${project.accent}30` : undefined,
            }}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-2xl border`}
                style={{ borderColor: `${project.accent}20` }}
              >
                {project.emoji}
              </div>
              <div className="flex items-center gap-2">
                {project.featured && (
                  <span className="px-2 py-1 rounded-lg bg-primary-600/10 border border-primary-500/20 text-primary-400 text-xs font-medium">
                    Featured
                  </span>
                )}
                <Layers size={14} className="text-slate-600" />
              </div>
            </div>

            {/* Title & Description */}
            <h3 className="text-white font-bold text-lg mb-2 group-hover:text-primary-300 transition-colors">
              {project.title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/5">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-400 hover:text-white text-sm transition-colors"
              >
                <Github size={15} />
                Code
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium transition-colors ml-auto"
                style={{ color: project.accent }}
              >
                <ExternalLink size={15} />
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline inline-flex items-center gap-2"
        >
          <Github size={18} />
          View All on GitHub
        </a>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
