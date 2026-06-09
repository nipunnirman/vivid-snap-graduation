import React from 'react';
import { ChevronDown, Calendar, Image as ImageIcon } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="ambient-glow-1" style={{ top: '-10%', left: '10%' }}></div>
      <div className="ambient-glow-2" style={{ bottom: '20%', right: '10%' }}></div>

      {/* Background Image Panel */}
      <div className="hero-bg-container">
        <div className="hero-bg-overlay"></div>
        {/* We use one of the beautiful graduation photos as the hero background */}
        <img 
          src="/Highlights/RJN02255.jpg" 
          alt="Graduation Celebration" 
          className="hero-bg-image"
          onError={(e) => {
            // Fallback if the specific image fails to load
            e.target.src = '/Highlights/RJN02210.jpg';
          }}
        />
      </div>

      <div className="hero-content fade-in">
        <div className="badge glass-panel">
          <span>Graduation Season 2026</span>
        </div>
        
        <h1 className="serif-text hero-title">
          ECHOES OF <span className="gradient-text">ACHIEVEMENTS</span>
        </h1>
        
        <p className="hero-subtitle">
          "The stars have brought you here. Let us guide you to what's beyond."
        </p>

        <p className="hero-description">
          Premium graduation photography capturing your milestone moments with vibrant, cinematic, and timeless detail.
        </p>

        <div className="hero-actions">
          <a href="#pricing" className="btn btn-primary">
            <Calendar size={18} /> View Pricing & Packages
          </a>
          <a href="#gallery" className="btn btn-secondary">
            <ImageIcon size={18} /> Explore Gallery
          </a>
        </div>
      </div>

      <a href="#gallery" className="scroll-down-indicator" aria-label="Scroll Down">
        <span>Scroll Down</span>
        <ChevronDown size={20} className="bounce" />
      </a>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding-top: 100px;
          padding-bottom: 80px;
          overflow: hidden;
          text-align: center;
        }

        .hero-bg-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -2;
        }

        .hero-bg-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.15;
          filter: contrast(100%);
        }

        .hero-bg-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.98) 90%);
          z-index: 1;
        }

        .hero-content {
          max-width: 800px;
          position: relative;
          z-index: 2;
          padding: 0 24px;
        }

        .badge {
          display: inline-flex;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--accent-yellow);
          margin-bottom: 24px;
        }

        .hero-title {
          font-size: 72px;
          line-height: 1.1;
          margin-bottom: 24px;
          letter-spacing: -0.01em;
        }

        .gradient-text {
          background: linear-gradient(135deg, #111827 30%, var(--accent-yellow) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: 22px;
          color: var(--text-primary);
          margin-bottom: 16px;
          letter-spacing: 0.02em;
        }

        .hero-description {
          font-size: 17px;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto 36px;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .scroll-down-indicator {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: var(--text-muted);
          text-decoration: none;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          transition: color 0.3s ease;
          z-index: 2;
        }

        .scroll-down-indicator:hover {
          color: var(--text-primary);
        }

        .bounce {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-8px);
          }
          60% {
            transform: translateY(-4px);
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 44px;
          }
          .hero-subtitle {
            font-size: 18px;
          }
        }
      `}</style>
    </section>
  );
}
