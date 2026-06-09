import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Download, Heart } from 'lucide-react';

export default function Lightbox({ isOpen, image, imagesList, onClose, onPrev, onNext, isFavorite, toggleFavorite }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    // Disable background scroll
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !image) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `/Highlights/${image}`;
    link.download = image;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
        {/* Header toolbar */}
        <div className="lightbox-toolbar glass-panel">
          <span className="photo-info">{image}</span>
          <div className="toolbar-actions">
            <button 
              className={`toolbar-btn ${isFavorite ? 'active' : ''}`} 
              onClick={toggleFavorite}
              title="Add to Favorites"
            >
              <Heart size={20} fill={isFavorite ? 'currentColor' : 'none'} />
            </button>
            <button className="toolbar-btn" onClick={handleDownload} title="Download Photo">
              <Download size={20} />
            </button>
            <button className="toolbar-btn close-btn" onClick={onClose} title="Close Lightbox">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Navigation buttons */}
        <button className="nav-btn prev-btn glass-panel" onClick={onPrev} aria-label="Previous photo">
          <ChevronLeft size={24} />
        </button>
        <button className="nav-btn next-btn glass-panel" onClick={onNext} aria-label="Next photo">
          <ChevronRight size={24} />
        </button>

        {/* Image Display */}
        <div className="lightbox-image-wrapper">
          <img 
            src={`/Highlights/${image}`} 
            alt="Graduation Showcase Fullscreen" 
            className="lightbox-image" 
          />
        </div>
      </div>

      <style>{`
        .lightbox-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(5, 5, 8, 0.92);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lightbox-container {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 40px 40px;
        }

        .lightbox-toolbar {
          position: absolute;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: calc(100% - 80px);
          max-width: 900px;
          padding: 12px 24px;
          z-index: 1010;
        }

        .photo-info {
          font-size: 14px;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .toolbar-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .toolbar-btn {
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          padding: 6px;
          transition: all 0.3s ease;
        }

        .toolbar-btn:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.08);
        }

        .toolbar-btn.active {
          color: #ef4444;
        }

        .nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(25, 25, 30, 0.6);
          border: 1px solid var(--glass-border);
          color: var(--text-primary);
          cursor: pointer;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1005;
          transition: all 0.3s ease;
        }

        .nav-btn:hover {
          background: var(--accent-yellow);
          border-color: var(--accent-yellow);
          box-shadow: 0 0 15px rgba(217, 119, 6, 0.4);
          color: #ffffff;
        }

        .prev-btn {
          left: 40px;
        }

        .next-btn {
          right: 40px;
        }

        .lightbox-image-wrapper {
          max-width: 90%;
          max-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lightbox-image {
          max-width: 100%;
          max-height: 80vh;
          object-fit: contain;
          box-shadow: 0 20px 50px rgba(0,0,0,0.6);
        }

        @media (max-width: 768px) {
          .lightbox-container {
            padding: 80px 20px 20px;
          }
          .lightbox-toolbar {
            width: calc(100% - 40px);
          }
          .nav-btn {
            width: 40px;
            height: 40px;
          }
          .prev-btn {
            left: 10px;
          }
          .next-btn {
            right: 10px;
          }
          .lightbox-image-wrapper {
            max-width: 95%;
          }
        }
      `}</style>
    </div>
  );
}
