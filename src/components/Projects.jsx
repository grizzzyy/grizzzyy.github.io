import { Github, Construction, ExternalLink } from 'lucide-react';

// Projects section - detailed project cards with tech stack and highlights
const Projects = () => {
  // Featured project with live demo (Planta)
  const featuredProject = {
    title: 'Planta',
    subtitle: 'Interactive Plant Care Web App',
    stack: ['Vue 3', 'Vue Router', 'Pinia', 'Firebase', 'Vite', 'v-calendar', 'Bootstrap Icons'],
    description: 'An interactive plant care web application that allows users to manage their personal plant collection, track care schedules, and explore plant information with a visually engaging growth system.',
    highlights: [
      'Built responsive Vue 3 application with modern composition API',
      'Implemented Firebase authentication and real-time database',
      'Designed interactive plant growth system with custom visuals',
      'Created care calendar for scheduling watering and tasks',
      'Focused on clean, calming aesthetic with smooth transitions'
    ],
    github: 'https://github.com/grizzzyy/Planta',
    demo: 'https://planta-dd1fe.firebaseapp.com/'
  };

  const projects = [
    {
      title: 'LearnNova',
      subtitle: 'AI-Powered Study Platform',
      status: 'In Development',
      stack: ['React', 'Flask', 'SQLite', 'JavaScript', 'HTML', 'CSS', 'Git'],
      description: 'A full-stack AI-powered study platform designed to help students generate flashcards, quizzes, and study guides.',
      highlights: [
        'Designed and developed responsive frontend interfaces',
        'Built interactive study dashboard components',
        'Integrated frontend with Flask backend APIs',
        'Focused on usability, accessibility, and visual engagement',
        'Collaborated using GitHub branching workflows and Agile development practices'
      ],
      github: 'https://github.com/grizzzyy',
      demo: '#'
    },
    {
      title: 'End2Friends',
      subtitle: 'Collaborative Study Chat Platform',
      status: 'In Development',
      stack: ['Django', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript', 'Git'],
      description: 'A collaborative study platform that supports messaging, discussion channels, and student-focused productivity features.',
      highlights: [
        'Developed frontend interfaces for messaging and collaboration',
        'Designed dashboard and navigation layouts',
        'Worked on authentication and user-focused UI components',
        'Collaborated in a team using GitHub feature branching and Agile workflows',
        'Integrated frontend with Django backend and PostgreSQL database'
      ],
      github: 'https://github.com/grizzzyy',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-plum-700 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blush-400 to-mauve-500 mx-auto rounded-full" />
          <p className="mt-4 text-plum-500 max-w-2xl mx-auto">
            A selection of projects I've worked on, showcasing my skills in frontend development and full-stack integration
          </p>
        </div>

        {/* Featured Project - Planta */}
        <div className="mb-8">
          <div
            className="group bg-white/70 backdrop-blur-sm rounded-3xl border border-mauve-200/50 shadow-soft hover:shadow-soft-lg overflow-hidden transition-all duration-300"
          >
            <div className="p-6 sm:p-8 lg:p-10">
              {/* Project Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-plum-700 mb-1">
                    {featuredProject.title}
                  </h3>
                  <p className="text-mauve-600 font-medium">{featuredProject.subtitle}</p>
                </div>
                
                {/* Action Buttons - Live Demo Primary */}
                <div className="flex gap-3">
                  <a
                    href={featuredProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-mauve-500 to-plum-500 text-white text-sm font-medium rounded-full shadow-soft hover:shadow-soft-lg transform hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={featuredProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-plum-600 text-white text-sm font-medium rounded-full hover:bg-plum-700 transform hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </div>
              </div>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {featuredProject.stack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blush-200 to-mauve-200 text-plum-600 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-plum-600 mb-6 leading-relaxed">
                {featuredProject.description}
              </p>

              {/* Highlights */}
              <div className="bg-cream-100/50 rounded-2xl p-5 border border-mauve-100">
                <h4 className="font-semibold text-plum-700 mb-3 text-sm uppercase tracking-wide">
                  Key Contributions
                </h4>
                <ul className="space-y-2">
                  {featuredProject.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start gap-3 text-sm text-plum-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blush-400 to-mauve-400 mt-2 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects */}
        <h3 className="font-display text-xl font-semibold text-plum-600 mb-6">More Projects</h3>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/70 backdrop-blur-sm rounded-3xl border border-mauve-200/50 shadow-soft hover:shadow-soft-lg overflow-hidden transition-all duration-300"
            >
              <div className="p-6 sm:p-8 lg:p-10">
                {/* Project Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-plum-700 mb-1">
                      {project.title}
                    </h3>
                    <p className="text-mauve-600 font-medium">{project.subtitle}</p>
                    {project.status && (
                      <span className="inline-flex items-center gap-1.5 mt-2 px-3 py-1 text-xs font-medium bg-amber-100 text-amber-700 rounded-full border border-amber-200">
                        <Construction className="w-3 h-3" />
                        {project.status}
                      </span>
                    )}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-plum-600 text-white text-sm font-medium rounded-full hover:bg-plum-700 transform hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                    <span className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-400 text-sm font-medium rounded-full border border-gray-200 cursor-default">
                      Demo Coming Soon
                    </span>
                  </div>
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blush-200 to-mauve-200 text-plum-600 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-plum-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="bg-cream-100/50 rounded-2xl p-5 border border-mauve-100">
                  <h4 className="font-semibold text-plum-700 mb-3 text-sm uppercase tracking-wide">
                    Key Contributions
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-3 text-sm text-plum-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blush-400 to-mauve-400 mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
