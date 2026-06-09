import React from 'react';
import { Phone, Mail } from 'lucide-react';

const InstagramIcon = ({ size = 20, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ size = 20, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Contact() {
  const handleInstagramClick = () => {
    window.open('https://instagram.com/vivid_snaps_rajana', '_blank');
  };

  const handleFacebookClick = () => {
    window.open('https://facebook.com/people/Vivid-Snaps-By-Rajana/100092102148101/', '_blank');
  };

  const handleCall = () => {
    window.open('tel:0701758101');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-bar">
        {/* Phone */}
        <div className="method-card glass-panel" onClick={handleCall}>
          <div className="method-icon-wrapper">
            <Phone size={18} className="method-icon" />
          </div>
          <div className="method-details">
            <span className="method-label">Call / WhatsApp</span>
            <span className="method-value">070 175 8101</span>
          </div>
        </div>

        {/* Instagram */}
        <div className="method-card glass-panel" onClick={handleInstagramClick}>
          <div className="method-icon-wrapper">
            <InstagramIcon size={18} className="method-icon" />
          </div>
          <div className="method-details">
            <span className="method-label">Instagram</span>
            <span className="method-value">@vivid_snaps_rajana</span>
          </div>
        </div>

        {/* Facebook */}
        <div className="method-card glass-panel" onClick={handleFacebookClick}>
          <div className="method-icon-wrapper">
            <FacebookIcon size={18} className="method-icon" />
          </div>
          <div className="method-details">
            <span className="method-label">Facebook</span>
            <span className="method-value">Vivid Snaps by Rajana</span>
          </div>
        </div>

        {/* Email */}
        <a href="mailto:clicksbyrajana@gmail.com" className="method-card glass-panel" style={{ textDecoration: 'none' }}>
          <div className="method-icon-wrapper">
            <Mail size={18} className="method-icon" />
          </div>
          <div className="method-details">
            <span className="method-label">Email</span>
            <span className="method-value">clicksbyrajana@gmail.com</span>
          </div>
        </a>
      </div>

      <style>{`
        .contact-section {
          padding: 30px 16px 60px;
        }

        .contact-bar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        .method-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          cursor: pointer;
        }

        .method-icon-wrapper {
          width: 38px;
          height: 38px;
          background: rgba(217, 119, 6, 0.08);
          border: 1px solid rgba(217, 119, 6, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-yellow);
          transition: all 0.3s ease;
        }

        .method-card:hover .method-icon-wrapper {
          background: var(--accent-yellow);
          color: #fff;
          box-shadow: 0 0 10px rgba(217, 119, 6, 0.2);
        }

        .method-details {
          display: flex;
          flex-direction: column;
        }

        .method-label {
          font-size: 11px;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .method-value {
          font-size: 13px;
          color: var(--text-primary);
          font-weight: 600;
          margin-top: 1px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        @media (max-width: 900px) {
          .contact-bar {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .contact-bar {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
