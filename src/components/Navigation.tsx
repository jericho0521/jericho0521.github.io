import { Link, useLocation } from 'react-router-dom';
import { Music } from 'lucide-react';

export function Navigation() {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/team', label: 'Team' },
    { path: '/research', label: 'Research' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/reflection', label: 'Reflection' },
  ];

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            onClick={handleScrollTop}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-[#26374D] rounded-lg flex items-center justify-center">
              <Music className="w-6 h-6 text-white" />
            </div>
            <span className="text-[#26374D]">NeuroRhythm+</span>
          </Link>

          <div className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleScrollTop}
                className={`px-3 py-2 transition-colors ${currentPath === item.path
                    ? 'text-[#26374D] border-b-2 border-[#26374D]'
                    : 'text-gray-600 hover:text-[#26374D]'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-[#26374D]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu - simplified version */}
        <div className="md:hidden mt-4 flex flex-wrap gap-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={handleScrollTop}
              className={`px-3 py-1 rounded-lg text-sm transition-colors ${currentPath === item.path
                  ? 'bg-[#26374D] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-[#DDE6ED]'
                }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
