'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function WorksPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Load build.min.js after DOM is mounted
  useEffect(() => {
    if (!mounted) return;
    
    const script = document.createElement('script');
    script.src = '/assets/dist/build.min.js';
    script.async = false;
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <main className="main" suppressHydrationWarning>
      <div className="app-container" suppressHydrationWarning>
        <div className="app-container-inner" suppressHydrationWarning>
          <header className="header">
            <div className="header__nav">
              <Link href="/" data-navigo className="logo-link">
                <img className="header__logo" src="/assets/img/poster-logo-dark-bolder.svg" alt="Poster" />
              </Link>
              <a href="#main_menu" className="btn btn--menu">
                <span>menu.</span>
              </a>
            </div>

            <div className="header__navigations-wrapper">
              <nav id="main_menu" className="header__subnav">
                <ul>
                  <li data-slug="homepage">
                    <Link href="/" data-navigo data-slug="homepage">
                      Homepage
                    </Link>
                  </li>
                  <li data-slug="works">
                    <Link href="/works" data-navigo data-slug="works" aria-current="page">
                      Works
                    </Link>
                  </li>
                  <li data-slug="about">
                    <Link href="/about" data-navigo data-slug="about">
                      About
                    </Link>
                  </li>
                  <li data-slug="contact">
                    <Link href="/contact" data-navigo data-slug="contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
              
              <div className="projects-nav">  
                <ul className="list list--cat">
                  <li><a href="#works" className="js-filter-cat" data-cat="*">all</a></li>
                  <li><a href="#works" className="js-filter-cat" data-cat="featured-film">Featured film</a></li>
                  <li><a href="#works" className="js-filter-cat" data-cat="commercials">Commercials</a></li>
                  <li><a href="#works" className="js-filter-cat" data-cat="music-videos">Music videos</a></li>
                </ul>
              </div>
            </div>
          </header>
          
          <div className="page-inner-content">
            <h1 className="hidden">Works</h1>

            <div className="bloc-projects-listing">
              <ul id="works" className="list list--works">
                {/* Projects will be loaded by build.min.js or add them here manually */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
