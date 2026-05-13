import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import BlogRouter from './pages/BlogRouter';
import PortfolioPage from './pages/PortfolioPage';
import PortfolioItem from './pages/PortfolioItem';
import TagPage from './pages/TagPage';
import CategoryPage from './pages/CategoryPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogRouter />} />
        <Route path="/blog/:pageOrSlug" element={<BlogRouter />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/:slug" element={<PortfolioItem />} />
        <Route path="/tags/:tag" element={<TagPage />} />
        <Route path="/categories/:category" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}
