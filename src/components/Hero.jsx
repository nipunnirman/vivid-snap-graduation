import React, { useState, useEffect } from 'react';
import { Camera } from 'lucide-react';

const heroImages = [
  "/Highlights/RJN06808.jpg",
  "/Highlights/RJN02210.jpg",
  "/Highlights/RJN04217.jpg",
  "/Highlights/RJN04477.jpg",
  "/Highlights/RJN04758.jpg",
  "/Highlights/RJN09034.jpg"
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="brand-header fade-in">
      <div className="brand-logo">
        <Camera className="logo-icon" size={26} />
        <span className="serif-text font-bold">VIVID <span className="highlight">SNAPS</span></span>
      </div>
      
      <p className="brand-slogan">
        "The stars have brought you here. Let us guide you to what's beyond."
      </p>

      {/* Slideshow container with sharp box shapes */}
      <div className="hero-single-photo">
        {heroImages.map((src, index) => (
          <img 
            key={src}
            src={src} 
            alt={`Graduation Showcase Hero ${index + 1}`} 
            className={`hero-img ${index === currentIndex ? 'active' : ''}`} 
          />
        ))}
      </div>

      <style>{`
        .brand-header {
          text-align: center;
          padding: 40px 16px 10px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 26px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .logo-icon {
          color: var(--accent-yellow);
        }

        .highlight {
          color: var(--accent-yellow);
          font-weight: 300;
        }

        .brand-slogan {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: 15px;
          color: var(--text-secondary);
          margin-bottom: 24px;
          letter-spacing: 0.02em;
        }

        .hero-single-photo {
          width: 100%;
          aspect-ratio: 16/9;
          overflow: hidden;
          border: 1px solid var(--glass-border);
          background-color: var(--bg-secondary);
          /* Force sharp square box-shape for photos */
          border-radius: 0 !important;
          position: relative;
        }

        .hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
          transition: opacity 1.5s ease-in-out;
        }

        .hero-img.active {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .brand-logo {
            font-size: 22px;
          }
          .brand-slogan {
            font-size: 13px;
          }
          .hero-single-photo {
            aspect-ratio: 16/10;
          }
        }
      `}</style>
    </header>
  );
}
