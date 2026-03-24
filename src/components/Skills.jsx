// Skills section - categorized skill cards with visual badges
const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      color: 'from-blush-300 to-blush-400',
      skills: ['Python', 'Java', 'HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Frameworks & Tech',
      color: 'from-mauve-300 to-mauve-400',
      skills: ['React', 'Flask', 'Django']
    },
    {
      title: 'Databases',
      color: 'from-plum-300 to-plum-400',
      skills: ['MySQL', 'SQL Server', 'PostgreSQL', 'SQLite']
    },
    {
      title: 'Tools',
      color: 'from-mauve-400 to-plum-400',
      skills: ['Git', 'GitHub', 'Visual Studio', 'NetBeans']
    },
    {
      title: 'Concepts',
      color: 'from-blush-400 to-mauve-400',
      skills: ['Responsive Design', 'REST APIs', 'Agile Development', 'UI/UX', 'Database Integration']
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-mauve-100/30 to-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-plum-700 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blush-400 to-mauve-500 mx-auto rounded-full" />
          <p className="mt-4 text-plum-500 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-mauve-200/50 shadow-soft hover:shadow-soft-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`} />
                <h3 className="font-semibold text-plum-700">{category.title}</h3>
              </div>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 text-sm bg-gradient-to-r from-cream-200 to-mauve-100 text-plum-600 rounded-full border border-mauve-200/50 hover:border-mauve-300 hover:from-blush-100 hover:to-mauve-200 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
