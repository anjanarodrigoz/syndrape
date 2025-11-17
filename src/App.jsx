import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import HomePage from './features/home/HomePage';
import ProjectsPage from './features/projects/ProjectsPage';
import PrototypingPage from './features/services/PrototypingPage';
import GenerativeAIPage from './features/services/GenerativeAIPage';
import MarketingPage from './features/services/MarketingPage';

function ScrollToTop() {
  const { pathname, hash } = window.location;

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/services/3d-prototyping" element={<PrototypingPage />} />
            <Route path="/services/generative-ai" element={<GenerativeAIPage />} />
            <Route path="/services/marketing-content" element={<MarketingPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
