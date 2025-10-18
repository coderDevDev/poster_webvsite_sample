'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function ClientLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Determine body class based on route
  let bodyClass = 'template-homepage';
  if (pathname === '/about') bodyClass = 'template-about';
  else if (pathname === '/contact') bodyClass = 'template-contact';
  else if (pathname === '/works') bodyClass = 'template-projects';

  useEffect(() => {
    // Apply body class
    document.body.className = bodyClass;
  }, [bodyClass]);

  return <>{children}</>;
}
