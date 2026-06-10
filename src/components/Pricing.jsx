import React from 'react';

export default function Pricing() {
  const packages = [
    {
      id: 'individual',
      name: 'Package One',
      title: 'Individual Session',
      price: '10,000 LKR',
      photo: '/WhatsApp Image 2026-06-11 at 3.45.13 AM.jpeg',
      details: 'In our studio • 60 minute session • 20 edited images • online gallery • print release'
    },
    {
      id: 'graduate',
      name: 'Package Two',
      title: 'Graduate Session',
      price: '5,000 LKR',
      priceSuffix: '/ per grad',
      photo: '/WhatsApp Image 2026-06-11 at 3.45.08 AM.jpeg',
      details: 'One location • 60 minute session • 20 edited images • online gallery • print release'
    },
    {
      id: 'lovestory',
      name: 'Package Three',
      title: 'Love Story Session',
      price: '14,000 LKR',
      photo: '/WhatsApp Image 2026-06-11 at 3.45.03 AM.jpeg',
      details: 'Two locations • 60 minute session • 20 edited images • online gallery • print release'
    }
  ];

  return (
    <section id="pricing" className="pricing-section-editorial">
      <div className="editorial-container">
        
        {/* Header */}
        <div className="editorial-header">
          <h2 className="swiss-title">Photography Packages</h2>
          <div className="swiss-subcategories">
            EVENTS / FASHION / CREATIVITY / WEDDINGS
          </div>
        </div>

        {/* Staggered Pill Collages */}
        <div className="editorial-collages-list">
          {packages.map((pkg, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={pkg.id} 
                className={`editorial-row ${isEven ? 'align-left' : 'align-right'}`}
              >
                {/* Olive Pill Card */}
                <div className="olive-pill-card glass-panel fade-in">
                  <div className="card-editorial-content">
                    <span className="pkg-pill-label">{pkg.name}</span>
                    <h3 className="pkg-pill-title">{pkg.title}</h3>
                    <p className="pkg-pill-details">{pkg.details}</p>
                    <span className="pkg-pill-price">{pkg.price}</span>
                  </div>
                </div>

                {/* Overlapping Black & White Photo cutout */}
                <div className="overlapping-photo-wrapper fade-in">
                  <img 
                    src={pkg.photo} 
                    alt={pkg.title} 
                    className="bw-cutout-photo" 
                  />
                </div>

              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        /* Off-white editorial background for pricing section */
        .pricing-section-editorial {
          background-color: #f3f3f1;
          padding: 80px 24px;
          position: relative;
          z-index: 5;
          overflow: visible;
        }

        .editorial-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        /* Swiss style typography */
        .editorial-header {
          text-align: left;
          margin-bottom: 70px;
          padding-left: 20px;
        }

        .swiss-title {
          font-family: var(--font-sans);
          font-size: 52px;
          font-weight: 700;
          letter-spacing: -0.04em;
          color: #111827;
          line-height: 1.05;
        }

        .swiss-subcategories {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          color: #6b7280;
          margin-top: 10px;
        }

        /* Collages layout */
        .editorial-collages-list {
          display: flex;
          flex-direction: column;
          gap: 90px;
        }

        .editorial-row {
          position: relative;
          display: flex;
          align-items: center;
          width: 100%;
          min-height: 240px;
        }

        /* Alignment positions for staggered pill collage */
        .align-left {
          justify-content: flex-start;
        }

        .align-right {
          justify-content: flex-end;
        }

        /* Olive Muted Green Pill Card */
        .olive-pill-card {
          width: 72%;
          background: #2b352e !important; /* Deep muted olive green */
          border: 1px solid rgba(255, 255, 255, 0.05) !important;
          color: #ffffff;
          padding: 40px 60px;
          border-radius: 100px !important; /* Forces perfect Pill shape */
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
          position: relative;
          z-index: 5;
          transition: transform 0.4s ease;
        }

        .olive-pill-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.18);
        }

        .card-editorial-content {
          max-width: 65%;
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        /* Align text columns based on row alignment */
        .align-right .card-editorial-content {
          margin-left: auto;
          margin-right: 0;
          text-align: right;
          align-items: flex-end;
        }

        .pkg-pill-label {
          font-size: 20px;
          font-weight: 500;
          letter-spacing: -0.02em;
          color: #ffffff;
          opacity: 0.9;
        }

        .pkg-pill-title {
          font-size: 28px;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.03em;
          margin-top: 2px;
          margin-bottom: 12px;
        }

        .pkg-pill-details {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.5);
          line-height: 1.6;
          margin-bottom: 18px;
          letter-spacing: 0.01em;
          max-width: 320px;
        }

        .pkg-pill-price {
          font-size: 28px;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.02em;
        }

        /* Black and White Cutout Photo styling overlapping cards */
        .overlapping-photo-wrapper {
          position: absolute;
          width: 38%;
          aspect-ratio: 1.1/1;
          z-index: 10;
          overflow: hidden;
          border-radius: 36px !important; /* Beautiful rounded border collage */
          border: 6px solid #f3f3f1; /* Magazine frame border */
          box-shadow: 0 20px 40px rgba(0,0,0,0.18);
        }

        /* Alternating placements breaking card boundaries */
        .align-left .overlapping-photo-wrapper {
          right: 4%;
          top: -24px;
        }

        .align-right .overlapping-photo-wrapper {
          left: 4%;
          top: -24px;
        }

        .bw-cutout-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          border-radius: 36px !important;
          transition: transform 0.6s ease;
        }

        .overlapping-photo-wrapper:hover .bw-cutout-photo {
          transform: scale(1.03);
        }

        /* Responsive Styles for Mobile Portables */
        @media (max-width: 768px) {
          .pricing-section-editorial {
            padding: 50px 16px;
          }

          .swiss-title {
            font-size: 34px;
          }

          .editorial-header {
            margin-bottom: 40px;
            padding-left: 5px;
          }

          .editorial-collages-list {
            gap: 60px;
          }

          .editorial-row {
            min-height: auto;
          }

          /* Keeping the side-by-side overlap on mobile, just scaled down */
          .olive-pill-card {
            width: 78%;
            padding: 24px 28px;
            border-radius: 40px !important; /* Proportional pill shape on mobile */
          }

          .card-editorial-content {
            max-width: 52%;
          }

          .pkg-pill-label {
            font-size: 14px;
          }

          .pkg-pill-title {
            font-size: 16px;
            margin-bottom: 6px;
          }

          .pkg-pill-details {
            font-size: 9px;
            margin-bottom: 8px;
            line-height: 1.3;
          }

          .pkg-pill-price {
            font-size: 18px;
          }

          .overlapping-photo-wrapper {
            width: 55%;
            border-width: 3px;
            border-radius: 18px !important;
          }

          .bw-cutout-photo {
            border-radius: 18px !important;
          }

          .align-left .overlapping-photo-wrapper {
            right: 0%;
            top: -12px;
          }

          .align-right .overlapping-photo-wrapper {
            left: 0%;
            top: -12px;
          }
        }
      `}</style>
    </section>
  );
}
