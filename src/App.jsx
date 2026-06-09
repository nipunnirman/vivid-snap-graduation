import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Lightbox from './components/Lightbox';
import { images } from './data/images';
import { ChevronUp } from 'lucide-react';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('vivid_snaps_favorites');
    return saved ? JSON.parse(saved) : [];
  });
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync favorites with localStorage
  useEffect(() => {
    localStorage.setItem('vivid_snaps_favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Handle Scroll to top visibility
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Lightbox handlers
  const handleSelectImage = (imgName) => {
    setSelectedImage(imgName);
  };

  const handleCloseLightbox = () => {
    setSelectedImage(null);
  };

  const handlePrevImage = () => {
    const currentIndex = images.indexOf(selectedImage);
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setSelectedImage(images[prevIndex]);
  };

  const handleNextImage = () => {
    const currentIndex = images.indexOf(selectedImage);
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setSelectedImage(images[nextIndex]);
  };

  const toggleFavorite = (e) => {
    if (e) e.stopPropagation();
    if (!selectedImage) return;
    
    if (favorites.includes(selectedImage)) {
      setFavorites(prev => prev.filter(item => item !== selectedImage));
    } else {
      setFavorites(prev => [...prev, selectedImage]);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Hero />
      <Pricing />
      <Gallery onSelectImage={handleSelectImage} favorites={favorites} />
      <Contact />

      {/* Lightbox Modal */}
      <Lightbox 
        isOpen={!!selectedImage}
        image={selectedImage}
        imagesList={images}
        onClose={handleCloseLightbox}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
        isFavorite={favorites.includes(selectedImage)}
        toggleFavorite={toggleFavorite}
      />

      {/* Floating Scroll To Top Button */}
      {showScrollTop && (
        <button className="scroll-top-btn glass-panel" onClick={scrollToTop} aria-label="Scroll to top">
          <ChevronUp size={20} />
        </button>
      )}

      <style>{`
        .scroll-top-btn {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-primary);
          cursor: pointer;
          z-index: 90;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          border: 1px solid var(--glass-border);
        }

        .scroll-top-btn:hover {
          background: var(--accent-yellow);
          color: #fff;
          border-color: var(--accent-yellow);
          transform: translateY(-2px);
        }
      `}</style>
    </>
  );
}

export default App;
