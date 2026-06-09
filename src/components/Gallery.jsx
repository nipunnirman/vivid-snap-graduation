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
          position: sticky;
          top: 15px;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 24px;
          margin-bottom: 30px;
          flex-wrap: wrap;
          gap: 16px;
          border-radius: 40px !important; /* Forces rounded shape */
          background: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.5);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.08);
        }

        .search-box {
          position: relative;
          width: 200px;
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
          padding: 8px 14px 8px 38px;
          background: rgba(0, 0, 0, 0.02);
          border: 1px solid var(--glass-border);
          border-radius: 30px !important;
          color: var(--text-primary);
          outline: none;
          font-family: var(--font-sans);
          font-size: 13px;
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
          gap: 6px;
          flex-wrap: wrap;
        }

        .tab {
          background: none;
          border: none;
          color: var(--text-secondary);
          padding: 8px 16px;
          border-radius: 30px !important;
          cursor: pointer;
          font-size: 13px;
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
          gap: 4px;
          background: rgba(0, 0, 0, 0.02);
          padding: 3px;
          border-radius: 20px !important;
          border: 1px solid var(--glass-border);
        }

        .layout-btn {
          background: none;
          border: none;
          color: var(--text-secondary);
          width: 28px;
          height: 28px;
          border-radius: 14px !important;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 12px;
        }

        .layout-btn.active, .layout-btn:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.1);
        }

        /* Gallery Grid Layouts */
        .gallery-grid {
          display: grid;
          grid-gap: 8px; /* Tighter gap for box grid style */
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
          overflow: hidden;
          cursor: pointer;
          aspect-ratio: 1/1; /* Square box shape */
          background-color: var(--bg-secondary);
          border: 1px solid var(--glass-border);
        }

        .gallery-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .gallery-item-card:hover .gallery-img {
          transform: scale(1.02);
        }

        .item-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.55);
          padding: 8px 12px;
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
          color: #ffffff;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.05em;
        }

        .fav-badge {
          filter: drop-shadow(0 1px 2px rgba(0,0,0,0.5));
        }

        .no-results {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 20px;
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
            gap: 10px;
            padding: 12px 16px;
            border-radius: 24px !important;
          }
          .search-box {
            width: 100%;
          }
          .layout-toggle {
            display: none;
          }
        }

        @media (max-width: 480px) {
          /* Force exactly 2 columns on mobile screens so it displays 2 horizontal photos side-by-side */
          .cols-2, .cols-3, .cols-4 {
            grid-template-columns: repeat(2, 1fr);
          }
          .gallery-grid {
            grid-gap: 6px;
          }
          .gallery-controls {
            padding: 8px 12px;
            margin-bottom: 20px;
            top: 10px;
            gap: 8px;
            border-radius: 20px !important;
          }
          .search-box input {
            padding: 6px 12px 6px 32px;
            font-size: 12px;
            border-radius: 20px !important;
          }
          .search-icon {
            left: 10px;
            width: 14px;
            height: 14px;
          }
          .category-tabs {
            display: flex;
            flex-wrap: nowrap;
            overflow-x: auto;
            justify-content: flex-start;
            width: 100%;
            -webkit-overflow-scrolling: touch;
            padding-bottom: 2px;
            scrollbar-width: none; /* Hide scrollbar Firefox */
          }
          .category-tabs::-webkit-scrollbar {
            display: none; /* Hide scrollbar Chrome/Safari */
          }
          .tab {
            font-size: 11px;
            padding: 6px 12px;
            white-space: nowrap;
            flex-shrink: 0;
            border-radius: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
