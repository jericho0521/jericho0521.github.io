import { useState } from 'react';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { FeaturesPage } from './pages/FeaturesPage';
import { TechnologyPage } from './pages/TechnologyPage';
import { TeamPage } from './pages/TeamPage';
import { ContactPage } from './pages/ContactPage';
import { ResearchPage } from './pages/ResearchPage';
import { GalleryPage } from './pages/GalleryPage';
import { ReflectionPage } from './pages/ReflectionPage';
import { Navigation } from './components/Navigation';

export type Page = 'home' | 'about' | 'features' | 'technology' | 'team' | 'research' | 'gallery' | 'reflection' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'features':
        return <FeaturesPage />;
      case 'technology':
        return <TechnologyPage />;
      case 'team':
        return <TeamPage />;
      case 'research':
        return <ResearchPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'reflection':
        return <ReflectionPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
}
