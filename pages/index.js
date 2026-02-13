import React from 'react';

// Asset URLs from Figma
const imgFrame1 = "http://localhost:3845/assets/532aac2a8ab5c46edb194634e6afef181ee6c23a.png";
const imgFrame18 = "http://localhost:3845/assets/29107164bbbedabc429785c2b4590470ee728c80.png";
const imgBg = "http://localhost:3845/assets/61fac012dcc8eeec21916e4d9e454427fb903092.png";
const imgFrame2 = "http://localhost:3845/assets/f3f26f2eb39332f62ac463c0c423ffe4d7280c29.png";
const imgDesignTemplatesPhones1 = "http://localhost:3845/assets/a67c83a595dbca438d39cb544f792916ef7d0b8c.png";
const imgDesignTemplatesPhones2 = "http://localhost:3845/assets/b3c0b6de465ac4049562f8b560f5a6658b9668c0.png";
const imgWebsiteCoverDevices1 = "http://localhost:3845/assets/7ea800142afed2685a4e53fe785f25e61fb67b90.png";
const imgWebsiteCoverDevices2 = "http://localhost:3845/assets/5f94a4c7ad4cab874a5764d651f11619b253779a.png";
const imgMain14402 = "http://localhost:3845/assets/fc472446bef101432c40c52d68b8ec5a164f9310.png";
const imgMobileShot21 = "http://localhost:3845/assets/c57453ecb6ab9de35b4197cedca81d9f1f5a94a7.png";
const imgMobileShot22 = "http://localhost:3845/assets/ee90451b98d6d913a9290ec2743861baf4664c5f.png";
const imgDribble = "http://localhost:3845/assets/ddcb0fa622ca33a9a22c52ddc2b59a406c21571e.png";
const img = "http://localhost:3845/assets/f59b79957511134b90f1ab890288e67e0c0b6a6d.png";
const imgBottle2 = "http://localhost:3845/assets/483382a368ab2e8c63b8874c0b6e76e6cced5ec2.png";
const imgDribble1 = "http://localhost:3845/assets/9a425916fcfd25f9cb073da06b66767351b3cdeb.png";
const img1 = "http://localhost:3845/assets/b1361812b5d193a6e93850f720fcabe99b0002c8.png";

export default function PortfolioLanding() {
  return (
    <div style={styles.container}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Inter:wght@300;400;500&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
          opacity: 0;
        }

        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        .delay-4 { animation-delay: 0.4s; }
        .delay-5 { animation-delay: 0.5s; }
        .delay-6 { animation-delay: 0.6s; }
      `}</style>

      {/* Hero Section */}
      <section style={styles.hero}>
        <header style={styles.header}>
          <span style={styles.navLink} className="animate-fade-in-up delay-1">index</span>
          <span style={styles.navLink} className="animate-fade-in-up delay-2">info</span>
        </header>
        
        <div style={styles.heroGrid}>
          <div style={styles.heroTextTop} className="animate-fade-in-up delay-3">
            <h1 style={styles.heroHeading}>
              i am a product designer with 6+ years of experience shipping products b2c and b2b2c in fintech, edtech and e-com
            </h1>
          </div>
          
          <div style={styles.heroTextBottom} className="animate-fade-in-up delay-4">
            <div style={styles.yellowAccent}>
              <h1 style={styles.heroHeading}>
                i believe in shaping a product vision at the intersection of a company's values, its visual language and user experience
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* First Project - Superpowered Course */}
      <section style={styles.projectSection}>
        <div style={styles.projectMeta} className="animate-fade-in-up delay-1">
          <span style={styles.metaPrimary}>professional projects</span>
          <span style={styles.metaSecondary}>2021 — present</span>
        </div>
        
        <div style={styles.projectContent} className="animate-fade-in-up delay-2">
          <div style={styles.projectInfo}>
            <h2 style={styles.projectTitle}>superpowered senior ux/ui course</h2>
            <p style={styles.projectDescription}>
              advanced UX/UI and product design course with 250+ graduates
            </p>
          </div>
          
          <div style={styles.projectImageLarge} className="animate-scale-in delay-3">
            <img src={imgFrame1} alt="Superpowered course" style={styles.projectImg} />
          </div>
          
          <div style={styles.divider}>
            <span style={styles.metaPrimary}>landing page</span>
            <span style={styles.metaSecondary}>2026</span>
          </div>
        </div>
      </section>

      {/* Second Project - EMEX Group */}
      <section style={styles.projectSection}>
        <div style={styles.projectGrid}>
          <div style={styles.projectInfo}>
            <h2 style={styles.projectTitle}>emex group</h2>
            <p style={styles.projectDescription}>
              a Global business with a marketplace platform offering 38M+ autoparts
            </p>
          </div>
          
          <div style={styles.gridItem}>
            <div style={styles.projectImageMedium} className="animate-scale-in delay-2">
              <div style={{...styles.projectImgContainer, backgroundColor: '#f3f3f3'}}>
                {/* Analytics chart placeholder */}
                <div style={styles.chartPlaceholder}>
                  <div style={styles.chart}></div>
                </div>
              </div>
            </div>
            <div style={styles.divider}>
              <span style={styles.metaPrimary}>seller hub</span>
              <span style={styles.metaSecondary}>2025</span>
            </div>
          </div>
          
          <div style={styles.gridItem}>
            <div style={styles.projectImageMedium} className="animate-scale-in delay-3">
              <img src={imgFrame18} alt="EMEX design system" style={styles.projectImg} />
            </div>
            <div style={styles.divider}>
              <span style={styles.metaPrimary}>design system</span>
              <span style={styles.metaSecondary}>2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Third Project - Sberbank */}
      <section style={styles.projectSection}>
        <div style={styles.projectGrid}>
          <div style={styles.projectInfo}>
            <h2 style={styles.projectTitle}>sberbank</h2>
            <p style={styles.projectDescription}>
              the Largest bank in Central and Eastern Europe, serving 100M+ active users
            </p>
          </div>
          
          <div style={styles.gridItem}>
            <div style={styles.projectImageMedium} className="animate-scale-in delay-2">
              <div style={{...styles.projectImgContainer, backgroundColor: '#f3f3f3'}}>
                {/* Mobile phone mockup */}
                <div style={styles.phoneMockup}>
                  <div style={styles.phone}>
                    <img src={imgBg} alt="Sberbank app" style={styles.phoneScreen} />
                  </div>
                </div>
              </div>
            </div>
            <div style={styles.divider}>
              <span style={styles.metaPrimary}>metal accounts onboarding</span>
              <span style={styles.metaSecondary}>2024</span>
            </div>
          </div>
          
          <div style={styles.gridItem}>
            <div style={styles.projectImageMedium} className="animate-scale-in delay-3">
              <img src={imgFrame2} alt="Deposit box search" style={styles.projectImg} />
            </div>
            <div style={styles.divider}>
              <span style={styles.metaPrimary}>deposit box map search</span>
              <span style={styles.metaSecondary}>2023</span>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Project - CloudPayments */}
      <section style={styles.projectSection}>
        <div style={styles.projectGrid}>
          <div style={styles.projectInfo}>
            <h2 style={styles.projectTitle}>cloudpayments</h2>
            <p style={styles.projectDescription}>
              a part of Tinkoff Group with its 15+ million active customers
            </p>
          </div>
          
          <div style={styles.gridItem}>
            <div style={styles.projectImageMedium} className="animate-scale-in delay-2">
              <div style={{...styles.projectImgContainer, backgroundColor: '#0b1e46'}}>
                <img src={imgWebsiteCoverDevices1} alt="CloudPayments website" style={styles.deviceMockup} />
              </div>
            </div>
            <div style={styles.divider}>
              <span style={styles.metaPrimary}>company website</span>
              <span style={styles.metaSecondary}>2022</span>
            </div>
          </div>
          
          <div style={styles.gridItem}>
            <div style={styles.projectImageMedium} className="animate-scale-in delay-3">
              <div style={{...styles.projectImgContainer, backgroundColor: '#e2e8ef'}}>
                <img src={imgDesignTemplatesPhones1} alt="Payment widget" style={styles.phonesMockup} />
              </div>
            </div>
            <div style={styles.divider}>
              <span style={styles.metaPrimary}>payment widget</span>
              <span style={styles.metaSecondary}>2021</span>
            </div>
          </div>
        </div>
      </section>

      {/* Craft Section */}
      <section style={styles.craftSection}>
        <div style={styles.craftMeta} className="animate-fade-in-up delay-1">
          <span style={styles.metaPrimary}>craft</span>
          <span style={styles.metaSecondary}>always</span>
        </div>
        
        <div style={styles.craftGrid}>
          <div style={styles.craftItem} className="animate-scale-in delay-2">
            <img src={imgMobileShot21} alt="Mobile design" style={styles.craftImg} />
          </div>
          <div style={styles.craftItem} className="animate-scale-in delay-3">
            <img src={imgMobileShot22} alt="Mobile design" style={styles.craftImg} />
          </div>
          <div style={styles.craftItem} className="animate-scale-in delay-4">
            <img src={imgDribble} alt="Design work" style={styles.craftImg} />
          </div>
          <div style={styles.craftItem} className="animate-scale-in delay-5">
            <div style={{...styles.craftImgContainer, backgroundColor: '#ff9d71'}}>
              <img src={imgBottle2} alt="Product design" style={styles.productImg} />
            </div>
          </div>
          <div style={styles.craftItem} className="animate-scale-in delay-6">
            <img src={imgDribble1} alt="Design work" style={styles.craftImg} />
          </div>
          <div style={styles.craftItem} className="animate-scale-in delay-6">
            <img src={img1} alt="Design work" style={styles.craftImg} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerLinks}>
          <a href="mailto:dar.shcherbakova@gmail.com" style={styles.footerLink}>
            dar.shcherbakova@gmail.com
          </a>
          <a href="#" style={styles.footerLink}>
            linkedin
          </a>
        </div>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    width: '100%',
    minHeight: '100vh',
    backgroundColor: '#ffffff',
    fontFamily: "'Inter', sans-serif",
  },
  
  // Hero Section
  hero: {
    padding: '20px',
    minHeight: '768px',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '40px',
  },
  navLink: {
    fontSize: '16px',
    fontWeight: '400',
    letterSpacing: '-0.48px',
    textTransform: 'lowercase',
    color: '#161616',
    cursor: 'pointer',
    transition: 'opacity 0.3s ease',
  },
  heroGrid: {
    display: 'grid',
    gridTemplateRows: '1fr 1fr',
    gap: '20px',
    flex: 1,
  },
  heroTextTop: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  heroTextBottom: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  yellowAccent: {
    backgroundColor: '#fdff45',
    padding: '40px 20px',
    width: '100%',
  },
  heroHeading: {
    fontFamily: "'Libre Baskerville', serif",
    fontSize: 'clamp(32px, 5vw, 50px)',
    fontWeight: '400',
    lineHeight: '1.1',
    letterSpacing: '-1px',
    textTransform: 'lowercase',
    color: '#161616',
    margin: 0,
  },
  
  // Project Sections
  projectSection: {
    padding: '124px 20px',
    borderTop: '1px solid #e5e5e5',
  },
  projectMeta: {
    display: 'flex',
    gap: '5px',
    alignItems: 'flex-end',
    marginBottom: '84px',
  },
  metaPrimary: {
    fontSize: '16px',
    fontWeight: '400',
    letterSpacing: '-0.48px',
    textTransform: 'lowercase',
    color: '#161616',
  },
  metaSecondary: {
    fontSize: '16px',
    fontWeight: '400',
    letterSpacing: '-0.48px',
    textTransform: 'lowercase',
    color: '#7d7d7d',
  },
  projectContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  projectGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  },
  projectInfo: {
    marginBottom: '20px',
  },
  projectTitle: {
    fontFamily: "'Libre Baskerville', serif",
    fontSize: 'clamp(36px, 5vw, 50px)',
    fontWeight: '400',
    lineHeight: '1.1',
    letterSpacing: '-1px',
    textTransform: 'lowercase',
    color: '#161616',
    margin: '0 0 3px 0',
  },
  projectDescription: {
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '1.25',
    letterSpacing: '-0.48px',
    textTransform: 'lowercase',
    color: '#7d7d7d',
    margin: 0,
  },
  projectImageLarge: {
    width: '100%',
    height: '600px',
    overflow: 'hidden',
    borderRadius: '4px',
  },
  projectImageMedium: {
    width: '100%',
    height: '335px',
    overflow: 'hidden',
    borderRadius: '4px',
    marginBottom: '5px',
  },
  projectImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  projectImgContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  divider: {
    borderTop: '1px solid #e5e5e5',
    paddingTop: '5px',
    display: 'flex',
    gap: '5px',
    alignItems: 'flex-end',
  },
  gridItem: {
    display: 'flex',
    flexDirection: 'column',
  },
  
  // Placeholders
  chartPlaceholder: {
    width: '80%',
    height: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chart: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
  },
  phoneMockup: {
    width: '60%',
    height: '90%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phone: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: '40px',
    overflow: 'hidden',
    boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
  },
  phoneScreen: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  deviceMockup: {
    width: '90%',
    height: '90%',
    objectFit: 'contain',
  },
  phonesMockup: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  
  // Craft Section
  craftSection: {
    padding: '220px 20px 124px',
  },
  craftMeta: {
    display: 'flex',
    gap: '5px',
    alignItems: 'flex-end',
    marginBottom: '84px',
  },
  craftGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  },
  craftItem: {
    width: '100%',
    height: '335px',
    overflow: 'hidden',
    borderRadius: '4px',
  },
  craftImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.4s ease',
  },
  craftImgContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productImg: {
    maxWidth: '80%',
    maxHeight: '80%',
    objectFit: 'contain',
  },
  
  // Footer
  footer: {
    padding: '124px 20px',
    borderTop: '1px solid #e5e5e5',
  },
  footerLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3px',
  },
  footerLink: {
    fontSize: '16px',
    fontWeight: '400',
    letterSpacing: '-0.48px',
    textTransform: 'lowercase',
    color: '#161616',
    textDecoration: 'none',
    transition: 'opacity 0.3s ease',
    cursor: 'pointer',
  },
};
