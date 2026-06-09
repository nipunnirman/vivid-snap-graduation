import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Lightbox from './components/Lightbox';
import { images } from './data/images';
import { Camera, Heart, Mail, Phone, ChevronUp } from 'lucide-react';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('vivid_snaps_favorites');
    return saved ? JSON.parse(saved) : [];
  });
  const [selectedPackage, setSelectedPackage] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync favorites with localStorage
  useEffect(() => {
    localStorage.setItem('vivid_snaps_favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Handle Scroll to top visibility
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
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

  const handleSelectPackage = (packageName) => {
    setSelectedPackage(packageName);
    // Scroll directly to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
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
      <Navbar />
      <Hero />
      <Gallery onSelectImage={handleSelectImage} favorites={favorites} />
      <Pricing onSelectPackage={handleSelectPackage} />
      <Contact selectedPackage={selectedPackage} />

      {/* Footer */}
      <footer className="footer-container glass-panel">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <Camera size={24} className="logo-icon" />
              <span className="serif-text">VIVID <span className="highlight">SNAPS</span></span>
            </div>
            <p className="footer-quote">
              "The stars have brought you here. Let us guide you to what's beyond."
            </p>
          </div>

          <div className="footer-links-group">
            <div className="link-column">
              <h4>Navigation</h4>
              <a href="#hero">Home</a>
              <a href="#gallery">Gallery</a>
              <a href="#pricing">Packages</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="link-column">
              <h4>Connect</h4>
              <a href="https://instagram.com/vivid_snaps_rajana" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://facebook.com/people/Vivid-Snaps-By-Rajana/100092102148101/" target="_blank" rel="noreferrer">Facebook</a>
              <a href="mailto:clicksbyrajana@gmail.com">Email Us</a>
              <a href="tel:0701758101">Call Us</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Vivid Snaps by Rajana. All Rights Reserved.</p>
          <p className="credit">Designed for milestones.</p>
        </div>
      </footer>

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
        .footer-container {
          margin: 60px 24px 24px;
          padding: 60px 40px 30px;
          border-radius: 24px;
          background: rgba(18, 18, 24, 0.4);
        }

        .footer-content {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 40px;
          margin-bottom: 40px;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-width: 400px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 22px;
          font-weight: 700;
        }

        .footer-logo .logo-icon {
          color: var(--accent-purple);
        }

        .footer-logo .highlight {
          color: var(--accent-purple);
          font-weight: 300;
        }

        .footer-quote {
          font-family: var(--font-serif);
          font-style: italic;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .footer-links-group {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .link-column {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .link-column h4 {
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--accent-gold);
          margin-bottom: 8px;
        }

        .link-column a {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 14px;
          transition: color 0.3s ease;
        }

        .link-column a:hover {
          color: var(--text-primary);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 24px;
          border-top: 1px solid var(--glass-border);
          font-size: 13px;
          color: var(--text-muted);
        }

        .scroll-top-btn {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-primary);
          cursor: pointer;
          z-index: 90;
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }

        .scroll-top-btn:hover {
          background: var(--accent-purple);
          color: #fff;
          border-color: var(--accent-purple);
          transform: translateY(-3px);
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .footer-container {
            padding: 40px 20px 20px;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 12px;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}

export default App;
