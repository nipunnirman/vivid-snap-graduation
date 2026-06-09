import React from 'react';

export default function Pricing() {
  const packages = [
    {
      id: 'individual',
      name: 'Individual Package',
      price: '10,000 LKR',
      photo: '/Highlights/RJN00272.jpg',
      details: 'in our studio or selected location',
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
      details: 'group & individual portrait variations',
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
      details: 'multi-location option & extended time',
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
                
                <ul className="pkg-features">
                  {pkg.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx}>{feat}</li>
                  ))}
                </ul>

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
          padding: 40px 16px;
        }

        .pricing-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .package-section-title {
          font-size: 36px;
          font-weight: 600;
          letter-spacing: -0.02em;
          color: var(--text-primary);
        }

        .package-tags {
          font-size: 11px;
          color: var(--text-muted);
          font-weight: 500;
          letter-spacing: 0.15em;
          margin-top: 4px;
        }

        .package-tags span {
          color: var(--text-secondary);
        }

        .alternating-packages-list {
          display: flex;
          flex-direction: column;
          gap: 40px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .package-row {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 30px;
          align-items: stretch;
        }

        .row-reverse {
          grid-template-columns: 1fr 1.2fr;
        }

        /* Dark Charcoal/Green Glass Card - matching design file */
        .glass-dark-panel {
          background: rgba(30, 35, 32, 0.95);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #ffffff;
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-radius: 28px !important; /* Forces rounded corner design for packages */
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        /* Enforce rounded corners on packaging image boxes */
        .package-photo-panel {
          position: relative;
          overflow: hidden;
          border-radius: 28px !important;
          border: 1px solid var(--glass-border);
          aspect-ratio: 1.1/1;
        }

        .pkg-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          border-radius: 28px !important;
        }

        .pkg-title {
          font-size: 28px;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 2px;
          letter-spacing: -0.01em;
        }

        .pkg-subtitle {
          font-size: 12px;
          color: var(--accent-yellow);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: block;
          margin-bottom: 6px;
        }

        .pkg-details-desc {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 20px;
        }

        .pkg-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.75);
          margin-bottom: 30px;
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
          font-size: 26px;
          font-weight: 700;
          color: #ffffff;
        }

        .pkg-price-suffix {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.5);
          margin-left: 4px;
        }

        /* Order layout for alternate rows */
        .row-normal .package-card-panel { order: 1; }
        .row-normal .package-photo-panel { order: 2; }
        .row-reverse .package-card-panel { order: 2; }
        .row-reverse .package-photo-panel { order: 1; }

        @media (max-width: 768px) {
          .package-row {
            grid-template-columns: 1fr !important;
            gap: 16px;
          }
          .package-card-panel {
            padding: 30px 24px;
            order: 1 !important;
          }
          .package-photo-panel {
            aspect-ratio: 1.4/1;
            order: 2 !important;
          }
          .package-tags {
            font-size: 9px;
          }
          .package-section-title {
            font-size: 28px;
          }
          .pkg-title {
            font-size: 24px;
          }
        }
      `}</style>
    </section>
  );
}
