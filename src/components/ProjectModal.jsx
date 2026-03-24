import { useState } from 'react';
import { X, Github, ExternalLink, Leaf, Calendar, BookOpen, Lock, Sprout, Image } from 'lucide-react';

// Project detail modal with full description, features, and screenshots
const ProjectModal = ({ project, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!isOpen || !project) return null;

  const features = project.features || [];
  const screenshots = project.screenshots || [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-plum-800/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden bg-white rounded-3xl shadow-2xl animate-fade-in">
        {/* Header with nature gradient for Planta */}
        <div className={`relative p-6 sm:p-8 ${project.theme === 'nature' 
          ? 'bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50' 
          : 'bg-gradient-to-br from-blush-50 via-mauve-50 to-cream-50'}`}>
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Project Title */}
          <div className="flex items-start gap-4">
            {project.theme === 'nature' && (
              <div className="p-3 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl shadow-lg">
                <Leaf className="w-8 h-8 text-white" />
              </div>
            )}
            <div>
              <h2 className={`font-display text-2xl sm:text-3xl font-bold ${project.theme === 'nature' ? 'text-emerald-800' : 'text-plum-700'}`}>
                {project.title}
              </h2>
              <p className={`mt-1 ${project.theme === 'nature' ? 'text-emerald-600' : 'text-mauve-600'} font-medium`}>
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Action Buttons - Live Demo Primary */}
          <div className="flex flex-wrap gap-3 mt-6">
            {project.demo && project.demo !== '#' && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 ${
                  project.theme === 'nature' 
                    ? 'bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700' 
                    : 'bg-gradient-to-r from-mauve-500 to-plum-500'
                }`}
              >
                <ExternalLink className="w-5 h-5" />
                View Live Demo
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-3 font-medium rounded-full border-2 transition-all duration-300 ${
                project.theme === 'nature'
                  ? 'border-emerald-300 text-emerald-700 hover:bg-emerald-50'
                  : 'border-mauve-300 text-plum-600 hover:bg-mauve-50'
              }`}
            >
              <Github className="w-5 h-5" />
              View Source
            </a>
          </div>
        </div>

        {/* Tabs */}
        <div className={`flex border-b ${project.theme === 'nature' ? 'border-emerald-100' : 'border-mauve-100'}`}>
          {['overview', 'features', 'screenshots'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 px-4 py-3 text-sm font-medium capitalize transition-colors ${
                activeTab === tab
                  ? project.theme === 'nature'
                    ? 'text-emerald-700 border-b-2 border-emerald-500 bg-emerald-50/50'
                    : 'text-plum-700 border-b-2 border-mauve-500 bg-mauve-50/50'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-6 sm:p-8 overflow-y-auto max-h-[50vh]">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Full Description */}
              <div>
                <h3 className={`font-semibold mb-3 ${project.theme === 'nature' ? 'text-emerald-800' : 'text-plum-700'}`}>
                  About This Project
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.fullDescription || project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className={`font-semibold mb-3 ${project.theme === 'nature' ? 'text-emerald-800' : 'text-plum-700'}`}>
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1.5 text-sm font-medium rounded-full ${
                        project.theme === 'nature'
                          ? 'bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700'
                          : 'bg-gradient-to-r from-blush-200 to-mauve-200 text-plum-600'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* UI/UX Notes if available */}
              {project.uiNotes && (
                <div className={`p-4 rounded-2xl ${project.theme === 'nature' ? 'bg-emerald-50 border border-emerald-100' : 'bg-cream-100 border border-mauve-100'}`}>
                  <h3 className={`font-semibold mb-2 ${project.theme === 'nature' ? 'text-emerald-800' : 'text-plum-700'}`}>
                    UI/UX Highlights
                  </h3>
                  <p className="text-sm text-gray-600">{project.uiNotes}</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'features' && (
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-2xl border transition-all hover:shadow-md ${
                    project.theme === 'nature'
                      ? 'bg-gradient-to-br from-emerald-50/50 to-green-50/50 border-emerald-100 hover:border-emerald-200'
                      : 'bg-gradient-to-br from-cream-50 to-blush-50 border-mauve-100 hover:border-mauve-200'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg ${project.theme === 'nature' ? 'bg-emerald-100' : 'bg-mauve-100'}`}>
                      {feature.icon || <Sprout className={`w-4 h-4 ${project.theme === 'nature' ? 'text-emerald-600' : 'text-mauve-600'}`} />}
                    </div>
                    <div>
                      <h4 className={`font-medium ${project.theme === 'nature' ? 'text-emerald-800' : 'text-plum-700'}`}>
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'screenshots' && (
            <div className="space-y-4">
              {screenshots.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-2">
                  {screenshots.map((screenshot, index) => (
                    <div
                      key={index}
                      className={`aspect-video rounded-2xl overflow-hidden border ${
                        project.theme === 'nature' ? 'border-emerald-200' : 'border-mauve-200'
                      }`}
                    >
                      <img
                        src={screenshot.url}
                        alt={screenshot.caption || `Screenshot ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className={`flex flex-col items-center justify-center py-12 rounded-2xl border-2 border-dashed ${
                  project.theme === 'nature' ? 'border-emerald-200 bg-emerald-50/30' : 'border-mauve-200 bg-mauve-50/30'
                }`}>
                  <Image className={`w-12 h-12 mb-3 ${project.theme === 'nature' ? 'text-emerald-300' : 'text-mauve-300'}`} />
                  <p className="text-gray-500 text-center">
                    Screenshots coming soon!<br />
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`font-medium underline ${project.theme === 'nature' ? 'text-emerald-600' : 'text-mauve-600'}`}
                    >
                      Try the live demo
                    </a>
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
