import React, { useState } from 'react';
import { Phone, Mail, Send, CheckCircle2 } from 'lucide-react';

const InstagramIcon = ({ size = 22, ...props }) => (
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

const FacebookIcon = ({ size = 22, ...props }) => (
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

export default function Contact({ selectedPackage }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pkg: selectedPackage || 'individual',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Sync selected package prop
  React.useEffect(() => {
    if (selectedPackage) {
      setFormData(prev => ({ ...prev, pkg: selectedPackage }));
    }
  }, [selectedPackage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API Submission
    setTimeout(() => {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          pkg: 'individual',
          message: ''
        });
      }, 5000);
    }, 800);
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/vivid_snaps_rajana', '_blank');
  };

  const handleFacebookClick = () => {
    window.open('https://facebook.com/people/Vivid-Snaps-By-Rajana/100092102148101/', '_blank'); // fallback
  };

  const handleCall = () => {
    window.open('tel:0701758101');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-grid">
        {/* Info Column */}
        <div className="contact-info fade-in">
          <h2 className="serif-text contact-title">
            LET'S CAPTURE YOUR <span className="highlight-text">STORY</span>
          </h2>
          <p className="contact-subtitle">
            Ready to frame your academic success? Reach out using the contact info or drop a message via the form.
          </p>

          <div className="contact-methods">
            {/* Phone */}
            <div className="method-card glass-panel" onClick={handleCall}>
              <div className="method-icon-wrapper">
                <Phone size={22} className="method-icon" />
              </div>
              <div className="method-details">
                <span className="method-label">Reach Out / Call</span>
                <span className="method-value">070 175 8101</span>
              </div>
            </div>

            {/* Instagram */}
            <div className="method-card glass-panel" onClick={handleInstagramClick}>
              <div className="method-icon-wrapper">
                <InstagramIcon size={22} className="method-icon" />
              </div>
              <div className="method-details">
                <span className="method-label">Instagram Portfolio</span>
                <span className="method-value">@vivid_snaps_rajana</span>
              </div>
            </div>

            {/* Facebook */}
            <div className="method-card glass-panel" onClick={handleFacebookClick}>
              <div className="method-icon-wrapper">
                <FacebookIcon size={22} className="method-icon" />
              </div>
              <div className="method-details">
                <span className="method-label">Facebook Page</span>
                <span className="method-value">Vivid Snaps by Rajana</span>
              </div>
            </div>

            {/* Email */}
            <a href="mailto:clicksbyrajana@gmail.com" className="method-card glass-panel" style={{ textDecoration: 'none' }}>
              <div className="method-icon-wrapper">
                <Mail size={22} className="method-icon" />
              </div>
              <div className="method-details">
                <span className="method-label">Direct Email</span>
                <span className="method-value">clicksbyrajana@gmail.com</span>
              </div>
            </a>
          </div>
        </div>

        {/* Form Column */}
        <div className="contact-form-container glass-panel fade-in">
          {submitted ? (
            <div className="success-state">
              <CheckCircle2 size={64} className="success-icon" />
              <h3 className="serif-text">Inquiry Sent Successfully!</h3>
              <p>Thank you for reaching out to Vivid Snaps. Rajana will contact you shortly to schedule your graduation session!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="booking-form">
              <h3 className="serif-text form-title">Book Your Graduation Session</h3>

              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="John Doe"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="john@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="070 175 8101"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="pkg">Selected Package</label>
                <select 
                  id="pkg" 
                  value={formData.pkg}
                  onChange={(e) => setFormData({...formData, pkg: e.target.value})}
                >
                  <option value="Individual Package">Individual Package (10,000 LKR)</option>
                  <option value="Graduate Session">Graduate Session (5,000 LKR)</option>
                  <option value="Love Story">Love Story (14,000 LKR)</option>
                  <option value="custom">Custom Photoshoot Option</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message / Session Details</label>
                <textarea 
                  id="message" 
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Mention your university, convocation date, preferred location or special requests..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-submit">
                <Send size={16} /> Send Booking Inquiry
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .contact-section {
          padding: 80px 24px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: start;
        }

        .contact-title {
          font-size: 38px;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .contact-subtitle {
          color: var(--text-secondary);
          margin-bottom: 40px;
          font-size: 16px;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .method-card {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 20px;
          cursor: pointer;
        }

        .method-icon-wrapper {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          background: rgba(217, 119, 6, 0.1);
          border: 1px solid rgba(217, 119, 6, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-yellow);
          transition: all 0.3s ease;
        }

        .method-card:hover .method-icon-wrapper {
          background: var(--accent-yellow);
          color: #fff;
          box-shadow: 0 0 15px rgba(217, 119, 6, 0.4);
        }

        .method-details {
          display: flex;
          flex-direction: column;
        }

        .method-label {
          font-size: 13px;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .method-value {
          font-size: 16px;
          color: var(--text-primary);
          font-weight: 600;
          margin-top: 2px;
        }

        .contact-form-container {
          padding: 40px;
          background: rgba(255, 255, 255, 0.65);
        }

        .form-title {
          font-size: 24px;
          margin-bottom: 30px;
          text-align: center;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 20px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        label {
          font-size: 13px;
          font-weight: 500;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        input, select, textarea {
          padding: 12px 16px;
          background: rgba(0, 0, 0, 0.02);
          border: 1px solid var(--glass-border);
          border-radius: 8px;
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-size: 14px;
          outline: none;
          transition: all 0.3s ease;
        }

        input:focus, select:focus, textarea:focus {
          border-color: var(--accent-yellow);
          background: rgba(0, 0, 0, 0.04);
          box-shadow: 0 0 10px rgba(217, 119, 6, 0.2);
        }

        select option {
          background: var(--bg-secondary);
          color: var(--text-primary);
        }

        .btn-submit {
          width: 100%;
          justify-content: center;
          margin-top: 10px;
        }

        .success-state {
          text-align: center;
          padding: 60px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .success-icon {
          color: var(--accent-teal);
          animation: scaleIn 0.5s ease-out forwards;
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .contact-form-container {
            padding: 30px 20px;
          }
        }

        @media (max-width: 480px) {
          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }
      `}</style>
    </section>
  );
}
