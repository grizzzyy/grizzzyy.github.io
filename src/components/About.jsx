import { Code, Palette, Database, Users } from 'lucide-react';

// About Me section - professional summary and interests
const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Building responsive, accessible interfaces'
    },
    {
      icon: Database,
      title: 'Full-Stack Integration',
      description: 'Connecting frontends with robust backends'
    },
    {
      icon: Palette,
      title: 'UI/UX Focus',
      description: 'Creating intuitive user experiences'
    },
    {
      icon: Users,
      title: 'Collaborative Projects',
      description: 'Working effectively in team environments'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-plum-700 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blush-400 to-mauve-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-plum-600 leading-relaxed">
              I am a <span className="font-semibold text-mauve-600">Computer Science student</span> at 
              Florida Southern College with a minor in Web and Cloud Computing. My passion lies in 
              creating digital experiences that are both beautiful and functional.
            </p>
            
            <p className="text-base text-plum-500 leading-relaxed">
              I'm deeply interested in <span className="font-medium">frontend development</span>, 
              full-stack applications, UI/UX design, and collaborative software projects. I thrive 
              on transforming complex problems into elegant, user-friendly solutions.
            </p>
            
            <p className="text-base text-plum-500 leading-relaxed">
              I enjoy building responsive interfaces, working with databases and backend integration, 
              and creating projects that genuinely improve usability for users. Every line of code 
              I write is focused on delivering meaningful experiences.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-mauve-200">
                <span className="text-sm text-plum-600">📍 Lakeland, FL</span>
              </div>
              <div className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-mauve-200">
                <span className="text-sm text-plum-600">🎓 Class of 2026</span>
              </div>
              <div className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-mauve-200">
                <span className="text-sm text-plum-600">💻 Open to Opportunities</span>
              </div>
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-mauve-200/50 shadow-soft hover:shadow-soft-lg hover:border-mauve-300 transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-blush-200 to-mauve-200 flex items-center justify-center group-hover:from-blush-300 group-hover:to-mauve-300 transition-colors">
                  <item.icon className="w-6 h-6 text-plum-600" />
                </div>
                <h3 className="font-semibold text-plum-700 mb-2">{item.title}</h3>
                <p className="text-sm text-plum-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
