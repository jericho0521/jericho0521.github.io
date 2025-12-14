import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { TeamPage } from './pages/TeamPage';
import { ResearchPage } from './pages/ResearchPage';
import { GalleryPage } from './pages/GalleryPage';
import { ReflectionPage } from './pages/ReflectionPage';
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/reflection" element={<ReflectionPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
