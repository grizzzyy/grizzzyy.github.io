import { Heart } from 'lucide-react';

// Footer component - simple clean footer with copyright
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-mauve-200/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Name / Logo */}
          <div className="font-display text-lg font-semibold text-plum-600">
            Griselda Ramirez Torres
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-plum-400">
            <span>© {currentYear}</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-blush-400 fill-blush-400" /> and React
            </span>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-4 text-sm">
            <a
              href="#hero"
              className="text-plum-500 hover:text-mauve-600 transition-colors"
            >
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
