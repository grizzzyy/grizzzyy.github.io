import { GraduationCap, BookOpen, Calendar } from 'lucide-react';

// Education section - degree info and relevant coursework
const Education = () => {
  const coursework = [
    'Intro to Web Development',
    'Object-Oriented Programming',
    'Algorithms',
    'Databases',
    'Data Structures',
    'Discrete Math',
    'Computer Organization & Architecture',
    'Operating Systems'
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-blush-100/20 to-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-plum-700 mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blush-400 to-mauve-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Degree Card */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl border border-mauve-200/50 shadow-soft p-8 hover:shadow-soft-lg transition-all duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blush-200 to-mauve-300 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-7 h-7 text-plum-600" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-plum-700">
                  Florida Southern College
                </h3>
                <p className="text-mauve-500">Lakeland, FL</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-mauve-500" />
                <div>
                  <p className="font-medium text-plum-700">Bachelor of Science in Computer Science</p>
                  <p className="text-sm text-plum-500">Minor: Web and Cloud Computing</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-mauve-500" />
                <p className="text-plum-600">
                  <span className="font-medium">Anticipated Graduation:</span> May 2026
                </p>
              </div>
            </div>

            {/* Decorative element */}
            <div className="mt-6 pt-6 border-t border-mauve-200/50">
              <div className="flex items-center gap-2 text-sm text-mauve-500">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                Currently Enrolled
              </div>
            </div>
          </div>

          {/* Coursework Card */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl border border-mauve-200/50 shadow-soft p-8 hover:shadow-soft-lg transition-all duration-300">
            <h3 className="font-semibold text-plum-700 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-mauve-200 to-plum-200 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-plum-600" />
              </div>
              Relevant Coursework
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {coursework.map((course, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-4 py-3 bg-cream-100/50 rounded-xl border border-mauve-100 hover:border-mauve-200 hover:bg-blush-50/50 transition-all duration-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blush-400 to-mauve-400 flex-shrink-0" />
                  <span className="text-sm text-plum-600">{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
