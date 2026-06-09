import React, { useState, useEffect } from 'react';
import { Camera, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content glass-panel">
        <a href="#hero" className="logo">
          <Camera className="logo-icon" />
          <span className="serif-text font-bold tracking-wide">VIVID <span className="highlight">SNAPS</span></span>
        </a>

        {/* Desktop Menu */}
        <div className="nav-links">
          <a href="#gallery">Gallery</a>
          <a href="#pricing">Packages</a>
          <a href="#contact">Contact</a>
          <a href="#pricing" className="btn btn-primary btn-sm">
            Book Session <ArrowRight size={14} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay fade-in glass-panel" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-links" onClick={(e) => e.stopPropagation()}>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Packages & Pricing</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact Details</a>
            <a 
              href="#pricing" 
              className="btn btn-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Session
            </a>
          </div>
        </div>
      )}

      <style>{`
        .navbar-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 20px 24px;
          transition: all 0.3s ease;
        }
        
        .navbar-container.scrolled {
          padding: 10px 24px;
        }

        .navbar-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 28px;
          background: rgba(255, 255, 255, 0.7);
          border-radius: 50px;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: var(--text-primary);
          font-size: 20px;
          font-weight: 700;
        }

        .logo-icon {
          color: var(--accent-yellow);
        }

        .highlight {
          color: var(--accent-yellow);
          font-weight: 300;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-links a {
          text-decoration: none;
          color: var(--text-secondary);
          font-size: 15px;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .nav-links a:hover {
          color: var(--text-primary);
        }

        .btn-sm {
          padding: 8px 20px;
          font-size: 14px;
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
        }

        .mobile-menu-overlay {
          position: fixed;
          top: 80px;
          left: 24px;
          right: 24px;
          padding: 40px 24px;
          border-radius: 24px;
          z-index: 99;
          background: rgba(255, 255, 255, 0.98);
        }

        .mobile-links {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .mobile-links a {
          text-decoration: none;
          color: var(--text-primary);
          font-size: 20px;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
}
