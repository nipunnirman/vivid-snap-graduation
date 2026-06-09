import React, { useState, useMemo } from 'react';
import { images } from '../data/images';
import { Search, SlidersHorizontal, Image as ImageIcon, Heart } from 'lucide-react';

export default function Gallery({ onSelectImage, favorites }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleCount, setVisibleCount] = useState(24);
  const [gridCols, setGridCols] = useState(3);

  // Group images into virtual categories based on their filenames for portfolio structure
  const categorizedImages = useMemo(() => {
    return images.map(img => {
      let category = 'solo';
      
      // Let's create sensible static groups based on common prefixes
      if (img.startsWith('RJN00824') || img.startsWith('H&U') || img.startsWith('RJN02210') || img.startsWith('RJN01978')) {
        category = 'group';
      } else if (img.startsWith('RJN04') || img.startsWith('RJN09')) {
        category = 'creative';
      } else if (img.startsWith('HMW')) {
        category = 'candid';
      }

      // Explicitly mark some beautiful files as "highlights"
      const isHighlight = img.startsWith('RJN02255') || img.startsWith('RJN02210') || img.startsWith('RJN00272') || img.startsWith('RJN01378') || img.startsWith('H&U') || img.startsWith('RJN04890') || img.startsWith('RJN09034');

      return {
        name: img,
        src: `/Highlights/${img}`,
        category,
        isHighlight
      };
    });
  }, []);

  // Filter logic
  const filteredImages = useMemo(() => {
    return categorizedImages.filter(img => {
      const matchesSearch = img.name.toLowerCase().includes(searchTerm.toLowerCase());
      
      if (activeCategory === 'all') return matchesSearch;
      if (activeCategory === 'highlights') return img.isHighlight && matchesSearch;
      if (activeCategory === 'favorites') return favorites.includes(img.name) && matchesSearch;
      return img.category === activeCategory && matchesSearch;
    });
  }, [categorizedImages, searchTerm, activeCategory, favorites]);

  const displayedImages = useMemo(() => {
    return filteredImages.slice(0, visibleCount);
  }, [filteredImages, visibleCount]);

  const loadMore = () => {
    setVisibleCount(prev => prev + 24);
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-header">
        <h2 className="serif-text section-title">ECHOES OF <span className="highlight-text">ACHIEVEMENTS</span></h2>
        <p className="section-subtitle">A visual walk through the milestone celebrations and graduation sessions.</p>
      </div>

      {/* Control panel */}
      <div className="gallery-controls glass-panel">
        <div className="search-box">
          <Search size={18} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search photos..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filter categories */}
        <div className="category-tabs">
          <button 
            className={`tab ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => { setActiveCategory('all'); setVisibleCount(24); }}
          >
            All Photos
          </button>
          <button 
            className={`tab ${activeCategory === 'highlights' ? 'active' : ''}`}
            onClick={() => { setActiveCategory('highlights'); setVisibleCount(24); }}
          >
            Featured Highlights
          </button>
          <button 
            className={`tab ${activeCategory === 'solo' ? 'active' : ''}`}
            onClick={() => { setActiveCategory('solo'); setVisibleCount(24); }}
          >
            Solo Portraits
          </button>
          <button 
            className={`tab ${activeCategory === 'group' ? 'active' : ''}`}
            onClick={() => { setActiveCategory('group'); setVisibleCount(24); }}
          >
            Groups & Couples
          </button>
          <button 
            className={`tab ${activeCategory === 'favorites' ? 'active' : ''}`}
            onClick={() => { setActiveCategory('favorites'); setVisibleCount(24); }}
          >
            Favorites ({favorites.length})
          </button>
        </div>

        {/* Grid Column Layout Controls */}
        <div className="layout-toggle">
          <button 
            className={`layout-btn ${gridCols === 2 ? 'active' : ''}`} 
            onClick={() => setGridCols(2)}
            title="2 Columns"
          >
            2
          </button>
          <button 
            className={`layout-btn ${gridCols === 3 ? 'active' : ''}`} 
            onClick={() => setGridCols(3)}
            title="3 Columns"
          >
            3
          </button>
          <button 
            className={`layout-btn ${gridCols === 4 ? 'active' : ''}`} 
            onClick={() => setGridCols(4)}
            title="4 Columns"
          >
            4
          </button>
        </div>
      </div>

      {/* Masonry Grid */}
      {displayedImages.length > 0 ? (
        <div className={`gallery-grid cols-${gridCols}`}>
          {displayedImages.map((img, idx) => (
            <div 
              key={img.name} 
              className="gallery-item-card fade-in"
              style={{ animationDelay: `${(idx % 12) * 0.05}s` }}
              onClick={() => onSelectImage(img.name)}
            >
              <img 
                src={img.src} 
                alt={img.name} 
                loading="lazy" 
                className="gallery-img"
              />
              <div className="item-overlay">
                <span className="photo-label">{img.name.split('.')[0]}</span>
                {favorites.includes(img.name) && (
                  <Heart size={18} fill="#ef4444" color="#ef4444" className="fav-badge" />
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-results glass-panel">
          <ImageIcon size={48} className="no-results-icon" />
          <h3>No photos found</h3>
          <p>Try clearing your search filters or add some photos to your favorites.</p>
        </div>
      )}

      {/* Load More Button */}
      {filteredImages.length > visibleCount && (
        <div className="load-more-container">
          <button className="btn btn-secondary" onClick={loadMore}>
            Load More Photos ({filteredImages.length - visibleCount} left)
          </button>
        </div>
      )}

      <style>{`
        .gallery-section {
          position: relative;
        }

        .gallery-header {
          margin-bottom: 40px;
          text-align: center;
        }

        .section-title {
          font-size: 38px;
          letter-spacing: 0.05em;
        }

        .highlight-text {
          color: var(--accent-yellow);
        }

        .section-subtitle {
          color: var(--text-secondary);
          margin-top: 10px;
          font-size: 16px;
        }

        .gallery-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 24px;
          margin-bottom: 40px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .search-box {
          position: relative;
          width: 250px;
        }

        .search-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }

        .search-box input {
          width: 100%;
          padding: 10px 14px 10px 42px;
          background: rgba(0, 0, 0, 0.02);
          border: 1px solid var(--glass-border);
          border-radius: 30px;
          color: var(--text-primary);
          outline: none;
          font-family: var(--font-sans);
          font-size: 14px;
          transition: all 0.3s ease;
        }

        .search-box input:focus {
          border-color: var(--accent-yellow);
          background: rgba(0, 0, 0, 0.04);
          box-shadow: 0 0 10px rgba(217, 119, 6, 0.2);
        }

        .category-tabs {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .tab {
          background: none;
          border: none;
          color: var(--text-secondary);
          padding: 8px 18px;
          border-radius: 20px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .tab:hover, .tab.active {
          color: var(--text-primary);
          background: rgba(0, 0, 0, 0.04);
        }

        .tab.active {
          border: 1px solid var(--accent-yellow);
          color: var(--accent-yellow);
        }

        .layout-toggle {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.03);
          padding: 4px;
          border-radius: 10px;
          border: 1px solid var(--glass-border);
        }

        .layout-btn {
          background: none;
          border: none;
          color: var(--text-secondary);
          width: 30px;
          height: 30px;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .layout-btn.active, .layout-btn:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.1);
        }

        /* Gallery Grid Layouts */
        .gallery-grid {
          display: grid;
          grid-gap: 16px;
          margin-bottom: 40px;
        }

        .cols-2 {
          grid-template-columns: repeat(2, 1fr);
        }

        .cols-3 {
          grid-template-columns: repeat(3, 1fr);
        }

        .cols-4 {
          grid-template-columns: repeat(4, 1fr);
        }

        .gallery-item-card {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          aspect-ratio: 4/5;
          background-color: var(--bg-secondary);
          border: 1px solid var(--glass-border);
        }

        .gallery-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .gallery-item-card:hover .gallery-img {
          transform: scale(1.04);
        }

        .item-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(10, 10, 12, 0.9) 0%, rgba(10, 10, 12, 0) 100%);
          padding: 20px 16px 12px;
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .gallery-item-card:hover .item-overlay {
          opacity: 1;
        }

        .photo-label {
          color: var(--text-primary);
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.05em;
        }

        .fav-badge {
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
        }

        .no-results {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 80px 40px;
          text-align: center;
        }

        .no-results-icon {
          color: var(--text-muted);
          margin-bottom: 16px;
        }

        .no-results h3 {
          margin-bottom: 8px;
        }

        .no-results p {
          color: var(--text-secondary);
        }

        .load-more-container {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }

        @media (max-width: 1024px) {
          .cols-4 {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .cols-3, .cols-4 {
            grid-template-columns: repeat(2, 1fr);
          }
          .gallery-controls {
            flex-direction: column;
            align-items: stretch;
          }
          .search-box {
            width: 100%;
          }
          .layout-toggle {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .cols-2, .cols-3, .cols-4 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
