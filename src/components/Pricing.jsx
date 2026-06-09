import React from 'react';

export default function Pricing() {
  const packages = [
    {
      id: 'individual',
      name: 'Individual Package',
      price: '10,000 LKR',
      photo: '/Highlights/RJN00272.jpg',
      details: 'In our studio or selected location',
      specs: '60 min session • 20 edited images • online gallery',
      features: [
        'Stunning casual photo session',
        'Professionally edited softcopies',
        'High-resolution digital downloads',
        '1-hour coverage at selected location'
      ]
    },
    {
      id: 'graduate',
      name: 'Graduate Session',
      subtitle: '(Two and More Graduates)',
      price: '5,000 LKR',
      priceSuffix: '/ per grad',
      photo: '/Highlights/RJN02210.jpg',
      details: 'Group & individual variations',
      specs: 'Shared moments • edited softcopies • natural interactions',
      features: [
        'Stunning casual photo session',
        'Professionally edited softcopies',
        'Includes natural interactions and shared moments between the graduates',
        'Group & individual portrait variations'
      ]
    },
    {
      id: 'lovestory',
      name: 'Love Story',
      price: '14,000 LKR',
      photo: '/Highlights/RJN01978.jpg',
      details: 'Multi-location option & extended time',
      specs: 'Romantic & relaxed • edited softcopies • couples focus',
      features: [
        'Romantic and relaxed casual photo session',
        'Professionally edited softcopies',
        'Perfect for couples celebrating convocation together',
        'Extended session time with multi-location option'
      ]
    }
  ];

  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-header">
        <h2 className="serif-text package-section-title">Photography Packages</h2>
        <div className="package-tags">
          <span>CONVOCATION</span> / <span>GRADUATION</span> / <span>CANDID PORTRAITS</span>
        </div>
      </div>

      <div className="alternating-packages-list">
        {packages.map((pkg, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={pkg.id} className={`package-row ${isEven ? 'row-normal' : 'row-reverse'}`}>
              
              {/* Info Card Block */}
              <div className="package-card-panel glass-dark-panel fade-in">
                <div className="panel-header">
                  <h3 className="serif-text pkg-title">{pkg.name}</h3>
                  {pkg.subtitle && <span className="pkg-subtitle">{pkg.subtitle}</span>}
                  <p className="pkg-details-desc">{pkg.details}</p>
                </div>
                
                {/* Desktop Features List */}
                <ul className="pkg-features desktop-only">
                  {pkg.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx}>{feat}</li>
                  ))}
                </ul>

                {/* Mobile Specs Summary */}
                <p className="pkg-specs-mobile mobile-only">{pkg.specs}</p>

                <div className="panel-footer">
                  <span className="pkg-price-amount">{pkg.price}</span>
                  {pkg.priceSuffix && <span className="pkg-price-suffix">{pkg.priceSuffix}</span>}
                </div>
              </div>

              {/* Photo Block */}
              <div className="package-photo-panel fade-in">
                <img src={pkg.photo} alt={pkg.name} className="pkg-image" />
              </div>

            </div>
          );
        })}
      </div>

      <style>{`
        .pricing-section {
          padding: 30px 16px;
        }

        .pricing-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .package-section-title {
          font-size: 32px;
          font-weight: 600;
          letter-spacing: -0.02em;
          color: var(--text-primary);
        }

        .package-tags {
          font-size: 10px;
          color: var(--text-muted);
          font-weight: 500;
          letter-spacing: 0.12em;
          margin-top: 3px;
        }

        .package-tags span {
          color: var(--text-secondary);
        }

        .alternating-packages-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .package-row {
          display: grid;
          grid-template-columns: 1.25fr 1fr;
          gap: 20px;
          align-items: stretch;
        }

        .row-reverse {
          grid-template-columns: 1fr 1.25fr;
        }

        /* Dark Charcoal/Green Glass Card - matching design file */
        .glass-dark-panel {
          background: rgba(30, 35, 32, 0.95);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #ffffff;
          padding: 30px 36px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-radius: 24px !important; /* Rounded corner design for packages */
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
        }

        /* Enforce rounded corners on packaging image boxes */
        .package-photo-panel {
          position: relative;
          overflow: hidden;
          border-radius: 24px !important;
          border: 1px solid var(--glass-border);
          aspect-ratio: 1.2/1;
        }

        .pkg-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          border-radius: 24px !important;
        }

        .pkg-title {
          font-size: 24px;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 2px;
          letter-spacing: -0.01em;
        }

        .pkg-subtitle {
          font-size: 11px;
          color: var(--accent-yellow);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: block;
          margin-bottom: 4px;
        }

        .pkg-details-desc {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.45);
          margin-bottom: 16px;
        }

        .pkg-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.75);
          margin-bottom: 20px;
        }

        .pkg-features li {
          position: relative;
          padding-left: 14px;
        }

        .pkg-features li::before {
          content: "•";
          position: absolute;
          left: 0;
          color: var(--accent-yellow);
        }

        .panel-footer {
          margin-top: auto;
          display: flex;
          align-items: baseline;
        }

        .pkg-price-amount {
          font-size: 24px;
          font-weight: 700;
          color: #ffffff;
        }

        .pkg-price-suffix {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.5);
          margin-left: 4px;
        }

        .mobile-only {
          display: none;
        }

        /* Order layout for alternate rows */
        .row-normal .package-card-panel { order: 1; }
        .row-normal .package-photo-panel { order: 2; }
        .row-reverse .package-card-panel { order: 2; }
        .row-reverse .package-photo-panel { order: 1; }

        @media (max-width: 768px) {
          .package-row {
            /* KEEP the 2-column side-by-side grid layout on mobile screens */
            grid-template-columns: 1.15fr 1fr !important;
            gap: 10px;
          }
          
          .glass-dark-panel {
            padding: 16px 14px;
            border-radius: 18px !important;
          }

          .package-photo-panel {
            border-radius: 18px !important;
            aspect-ratio: 1.05/1;
          }

          .pkg-image {
            border-radius: 18px !important;
          }

          .desktop-only {
            display: none !important;
          }

          .mobile-only {
            display: block;
          }

          .pkg-title {
            font-size: 15px;
            line-height: 1.2;
            margin-bottom: 1px;
          }

          .pkg-subtitle {
            font-size: 9px;
            margin-bottom: 2px;
          }

          .pkg-details-desc {
            font-size: 9px;
            margin-bottom: 8px;
            line-height: 1.2;
          }

          .pkg-specs-mobile {
            font-size: 10px;
            color: rgba(255, 255, 255, 0.7);
            margin-bottom: 12px;
            line-height: 1.3;
          }

          .pkg-price-amount {
            font-size: 16px;
          }

          .pkg-price-suffix {
            font-size: 10px;
          }

          .package-section-title {
            font-size: 26px;
          }
        }
      `}</style>
    </section>
  );
}
