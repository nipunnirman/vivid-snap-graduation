import React from 'react';

export default function Hero() {
  return (
    <div className="hero-banner-only fade-in">
      <img 
        src="/3.png" 
        alt="Vivid Snaps Graduation Banner" 
        className="hero-banner-img" 
      />
      <style>{`
        .hero-banner-only {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px 16px 10px;
          box-sizing: border-box;
        }

        .hero-banner-img {
          width: 100%;
          height: auto;
          display: block;
          border: 1px solid var(--glass-border);
          /* Force sharp square box-shape for photos */
          border-radius: 0 !important;
        }
      `}</style>
    </div>
  );
}
