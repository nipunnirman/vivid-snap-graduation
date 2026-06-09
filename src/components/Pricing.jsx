import React from 'react';
import { Check, Info, Sparkles, Users, HeartHandshake } from 'lucide-react';

export default function Pricing({ onSelectPackage }) {
  const packages = [
    {
      id: 'individual',
      name: 'Individual Package',
      price: '10,000 LKR',
      icon: <Sparkles className="package-icon" size={24} />,
      features: [
        'Stunning casual photo session',
        'Professionally edited softcopies',
        'High-resolution digital downloads',
        '1-hour coverage at selected location'
      ],
      tag: 'Most Popular',
      color: 'var(--accent-yellow)'
    },
    {
      id: 'graduate',
      name: 'Graduate Session',
      subtitle: '(Two and More Graduates)',
      price: '5,000 LKR',
      priceSuffix: '/ per grad',
      icon: <Users className="package-icon" size={24} />,
      features: [
        'Stunning casual photo session',
        'Professionally edited softcopies',
        'Includes natural interactions and shared moments between the graduates',
        'Group & individual portrait variations'
      ],
      tag: 'Best Value',
      color: 'var(--text-primary)'
    },
    {
      id: 'lovestory',
      name: 'Love Story',
      price: '14,000 LKR',
      icon: <HeartHandshake className="package-icon" size={24} />,
      features: [
        'Romantic and relaxed casual photo session',
        'Professionally edited softcopies',
        'Perfect for couples celebrating convocation together',
        'Extended session time with multi-location option'
      ],
      tag: 'Premium Choice',
      color: 'var(--accent-yellow)'
    }
  ];

  return (
    <section id="pricing" className="pricing-section">
      <div className="ambient-glow-1" style={{ top: '20%', right: '-10%' }}></div>
      <div className="ambient-glow-2" style={{ bottom: '10%', left: '-10%' }}></div>

      <div className="pricing-header">
        <h2 className="serif-text section-title">PACKAGES & <span className="highlight-text">PRICING</span></h2>
        <p className="section-subtitle">Choose the perfect package for your graduation convocation celebration.</p>
      </div>

      <div className="pricing-grid">
        {packages.map((pkg) => (
          <div key={pkg.id} className="pricing-card glass-panel fade-in">
            {pkg.tag && (
              <span className="card-badge" style={{ backgroundColor: pkg.color, color: pkg.color === 'var(--text-primary)' ? '#fff' : '#000' }}>
                {pkg.tag}
              </span>
            )}
            
            <div className="card-header">
              <div className="icon-wrapper" style={{ color: pkg.color, boxShadow: `0 0 20px ${pkg.color === 'var(--text-primary)' ? 'rgba(0,0,0,0.05)' : pkg.color + '15'}` }}>
                {pkg.icon}
              </div>
              <h3 className="serif-text package-title">{pkg.name}</h3>
              {pkg.subtitle && <p className="package-subtitle">{pkg.subtitle}</p>}
              <div className="package-price">
                <span className="price-amount">{pkg.price}</span>
                {pkg.priceSuffix && <span className="price-suffix">{pkg.priceSuffix}</span>}
              </div>
            </div>

            <hr className="divider" />

            <ul className="features-list">
              {pkg.features.map((feat, idx) => (
                <li key={idx} className="feature-item">
                  <Check size={18} className="check-icon" style={{ color: pkg.color }} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <button 
              className="btn btn-primary btn-block" 
              style={{ background: pkg.color === 'var(--text-primary)' ? '#111827' : `linear-gradient(135deg, ${pkg.color}, rgba(0,0,0,0))` }}
              onClick={() => onSelectPackage(pkg.name)}
            >
              Inquire Package
            </button>
          </div>
        ))}
      </div>

      <div className="pricing-notes glass-panel">
        <Info size={20} className="info-icon" />
        <p>
          Need a custom photoshoot package, specific locations, or prints? Let's discuss your custom requirements! 
          <a href="#contact" className="notes-link"> Get in touch with us</a>
        </p>
      </div>

      <style>{`
        .pricing-section {
          position: relative;
        }

        .pricing-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-bottom: 50px;
        }

        .pricing-card {
          position: relative;
          padding: 40px 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .card-badge {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          color: #000;
          font-weight: 700;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 6px 16px;
          border-radius: 20px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        }

        .icon-wrapper {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--glass-border);
          margin: 0 auto 20px;
        }

        .package-title {
          font-size: 26px;
          margin-bottom: 4px;
        }

        .package-subtitle {
          font-size: 13px;
          color: var(--text-secondary);
          margin-bottom: 12px;
        }

        .package-price {
          margin: 16px 0;
        }

        .price-amount {
          font-size: 32px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .price-suffix {
          font-size: 14px;
          color: var(--text-secondary);
          margin-left: 4px;
        }

        .divider {
          width: 100%;
          border: 0;
          height: 1px;
          background: var(--glass-border);
          margin: 24px 0;
        }

        .features-list {
          list-style: none;
          width: 100%;
          text-align: left;
          margin-bottom: 32px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14px;
          color: var(--text-secondary);
        }

        .check-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .btn-block {
          width: 100%;
          justify-content: center;
          border: 1px solid var(--glass-border) !important;
          transition: all 0.3s ease;
        }

        .btn-block:hover {
          transform: scale(1.02);
          box-shadow: 0 5px 15px rgba(255, 255, 255, 0.05);
        }

        .pricing-notes {
          display: flex;
          align-items: center;
          gap: 16px;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px 24px;
          justify-content: center;
          font-size: 14px;
        }

        .info-icon {
          color: var(--accent-yellow);
          flex-shrink: 0;
        }

        .notes-link {
          color: var(--accent-yellow);
          text-decoration: none;
          font-weight: 500;
        }

        .notes-link:hover {
          text-decoration: underline;
        }

        @media (max-width: 992px) {
          .pricing-grid {
            grid-template-columns: 1fr;
            max-width: 480px;
            margin: 0 auto 40px;
          }
        }
      `}</style>
    </section>
  );
}
