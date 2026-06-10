import React, { useState, useEffect } from 'react';
import { Camera } from 'lucide-react';

const heroImages = [
  "/Highlights/RJN06808.jpg",
  "/WhatsApp Image 2026-06-11 at 3.45.12 AM (1).jpeg",
  "/Highlights/RJN04217.jpg",
  "/Highlights/RJN04477.jpg",
  "/Highlights/RJN04758.jpg",
  "/Highlights/RJN09034.jpg",
  "/WhatsApp Image 2026-06-11 at 3.45.03 AM.jpeg"
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

      {/* Sliding carousel container with sharp box shapes */}
      <div className="hero-single-photo">
        <div 
          className="slideshow-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {heroImages.map((src, index) => (
            <div className="slide-wrapper" key={src}>
              <img 
                src={src} 
                alt={`Graduation Showcase Hero ${index + 1}`} 
                className="hero-img" 
              />
            </div>
          ))}
        </div>
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

        .slideshow-track {
          display: flex;
          width: 100%;
          height: 100%;
          transition: transform 1s ease-in-out;
        }

        .slide-wrapper {
          flex: 0 0 100%;
          width: 100%;
          height: 100%;
        }

        .hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
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
