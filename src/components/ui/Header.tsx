import React, { useState, useEffect } from 'react';

const useScroll = (threshold = 20) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);
  return scrolled;
};

const links = [
  { label: 'Who We Are', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our Process', href: '#process' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Compare', href: '#compare' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Testimonials', href: '#testimonials' },
];

export function Header() {
  const scrolled = useScroll(20);

  return (
    <>
      {/* ─── Desktop Header ─── */}
      <header
        style={{
          position: 'fixed',
          top: scrolled ? '12px' : '0px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 9999,
          width: scrolled ? 'min(900px, 95vw)' : '100%',
          maxWidth: '100%',
          transition: 'top 0.4s ease, width 0.4s ease, border-radius 0.4s ease, background-color 0.4s ease, backdrop-filter 0.4s ease, box-shadow 0.4s ease',
          borderRadius: scrolled ? '9999px' : '0px',
          backgroundColor: scrolled ? 'rgba(0,0,0,0.85)' : 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(12px)',
          boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.5)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(255,255,255,0.04)',
        }}
      >
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: scrolled ? '60px' : '80px',
            padding: scrolled ? '0 24px' : '0 32px',
            transition: 'height 0.4s ease, padding 0.4s ease',
          }}
        >
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <img
              src="/syncra-labs-logo-transparent.png"
              alt="Syncra Labs"
              style={{
                height: scrolled ? '56px' : '104px',
                width: 'auto',
                objectFit: 'contain',
                transition: 'height 0.4s ease',
              }}
            />
          </a>

          {/* Desktop Nav Links — centered */}
          <div
            className="hidden lg:flex"
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              alignItems: 'center',
              gap: scrolled ? '4px' : '8px',
              transition: 'gap 0.4s ease',
            }}
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  color: '#9ca3af',
                  fontWeight: 600,
                  fontSize: scrolled ? '11px' : '14px',
                  padding: scrolled ? '5px 8px' : '8px 12px',
                  borderRadius: '9999px',
                  whiteSpace: 'nowrap',
                  textDecoration: 'none',
                  transition: 'color 0.2s, background-color 0.2s, font-size 0.4s, padding 0.4s',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLAnchorElement).style.color = '#ffffff';
                  (e.target as HTMLAnchorElement).style.backgroundColor = 'rgba(255,255,255,0.1)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLAnchorElement).style.color = '#9ca3af';
                  (e.target as HTMLAnchorElement).style.backgroundColor = 'transparent';
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact Button */}
          <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#22d3ee',
                color: '#000000',
                fontWeight: 700,
                fontSize: scrolled ? '11px' : '14px',
                padding: scrolled ? '7px 16px' : '10px 24px',
                borderRadius: '9999px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition: 'background-color 0.2s, font-size 0.4s, padding 0.4s',
              }}
              onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.backgroundColor = '#67e8f9'; }}
              onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.backgroundColor = '#22d3ee'; }}
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* ─── Spacer to push content below the fixed header ─── */}
      <div style={{ height: '104px' }} />
    </>
  );
}
