import { Github, ArrowDown, Mail } from 'lucide-react';

// Hero section - main landing area with intro and CTAs
const Hero = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Image Placeholder */}
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full bg-gradient-to-br from-blush-300 via-mauve-300 to-plum-400 p-1 shadow-glow">
            <div className="w-full h-full rounded-full bg-cream-100 flex items-center justify-center">
              <span className="text-4xl sm:text-5xl font-display text-plum-500">GR</span>
            </div>
          </div>
        </div>

        {/* Name */}
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-plum-700 mb-4 animate-slide-up">
          Griselda Ramirez Torres
        </h1>

        {/* Title */}
        <p className="text-lg sm:text-xl text-mauve-600 font-medium mb-6 animate-slide-up animation-delay-200">
          Computer Science Student | Frontend & Full-Stack Developer
        </p>

        {/* Introduction */}
        <p className="text-base sm:text-lg text-plum-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up animation-delay-400">
          I build responsive, user-focused web applications and enjoy creating clean interfaces 
          and useful digital experiences. Passionate about turning ideas into elegant, functional code.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 animate-slide-up animation-delay-600">
          <a
            href="#projects"
            className="group px-6 py-3 bg-gradient-to-r from-mauve-500 to-plum-500 text-white font-medium rounded-full shadow-soft hover:shadow-soft-lg transform hover:-translate-y-0.5 transition-all duration-300"
          >
            View Projects
            <ArrowDown className="inline-block ml-2 w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
          
          <a
            href="#contact"
            className="px-6 py-3 bg-white/80 backdrop-blur-sm text-plum-600 font-medium rounded-full border border-mauve-300 hover:border-mauve-400 hover:bg-blush-100/50 shadow-soft hover:shadow-soft-lg transform hover:-translate-y-0.5 transition-all duration-300"
          >
            <Mail className="inline-block mr-2 w-4 h-4" />
            Contact Me
          </a>
          
          <a
            href="https://github.com/grizzzyy"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-plum-600 text-white font-medium rounded-full hover:bg-plum-700 shadow-soft hover:shadow-soft-lg transform hover:-translate-y-0.5 transition-all duration-300"
          >
            <Github className="inline-block mr-2 w-4 h-4" />
            GitHub
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float hidden sm:block">
          <a href="#about" className="text-mauve-400 hover:text-mauve-600 transition-colors">
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
