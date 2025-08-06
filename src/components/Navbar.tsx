import React, { useEffect, useState } from 'react';
import NavbarSSR from './Navbar.ssr';

const Navbar: React.FC = (props) => {
  const [ClientNavbar, setClientNavbar] = useState<React.FC | null>(null);

  useEffect(() => {
    import('./Navbar.client').then((mod) => setClientNavbar(() => mod.default));
  }, []);

  if (typeof window === 'undefined' || !ClientNavbar) {
    // SSR or before client hydration: use SSR Navbar
    return <NavbarSSR {...props} />;
  }
  // After hydration: use client Navbar
  return <ClientNavbar {...props} />;
};

export default Navbar;
