import { Music } from 'lucide-react';
import { Page } from '../App';

interface NavigationProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems: { page: Page; label: string }[] = [
    { page: 'home', label: 'Home' },
    { page: 'about', label: 'About' },
    { page: 'features', label: 'Features' },
    { page: 'technology', label: 'Technology' },
    { page: 'team', label: 'Team' },
    { page: 'research', label: 'Research' },
    { page: 'gallery', label: 'Gallery' },
    { page: 'reflection', label: 'Reflection' },
    { page: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => handleNavigate('home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-[#26374D] rounded-lg flex items-center justify-center">
              <Music className="w-6 h-6 text-white" />
            </div>
            <span className="text-[#26374D]">NeuroRhythm+</span>
          </button>
          
          <div className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`px-3 py-2 transition-colors ${
                  currentPage === item.page
                    ? 'text-[#26374D] border-b-2 border-[#26374D]'
                    : 'text-gray-600 hover:text-[#26374D]'
                }`}
              >
                {item.label}
              </button>
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
            <button
              key={item.page}
              onClick={() => handleNavigate(item.page)}
              className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                currentPage === item.page
                  ? 'bg-[#26374D] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-[#DDE6ED]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
