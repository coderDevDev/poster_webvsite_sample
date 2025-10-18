'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function ContactPage() {
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
      <div className="app-container body-light" suppressHydrationWarning>
        <div className="app-container-inner" suppressHydrationWarning>
          <header className="header">
            <div className="header__nav">
              <Link href="/" data-navigo className="logo-link">
                <img className="header__logo" src="/assets/img/poster-logo-bolder.svg" alt="Poster" />
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
                    <Link href="/works" data-navigo data-slug="works">
                      Works
                    </Link>
                  </li>
                  <li data-slug="about">
                    <Link href="/about" data-navigo data-slug="about">
                      About
                    </Link>
                  </li>
                  <li data-slug="contact">
                    <Link href="/contact" data-navigo data-slug="contact" aria-current="page">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          
          <div className="page-inner-content">
            <h1 className="hidden">Contact</h1>

            <div className="contact-inner-wrapper">
              <div className="box box--staff">
                <ul className="list list--staff">
                  <li>
                    <h2>Head of Studio</h2>
                    <ul className="list list--members">
                      <li>
                        Cyril Bordesoulle<br/>
                        <a className="lnk lnk--through" href="mailto:cyril@posterco.tv">cyril@posterco.tv</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h2>Head of Post-Production</h2>
                    <ul className="list list--members">
                      <li>
                        Yéléna Dos Santos<br/>
                        <a className="lnk lnk--through" href="mailto:ydossantos@posterco.tv">ydossantos@posterco.tv</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              
              <div className="box box--address">
                <p>72 bld de Sébastopol<br />
                Paris 75003</p>
                
                <p>
                  T&nbsp;: <a className="lnk lnk--through" href="tel:+330148019966">+33 (0)1 48 01 99 66</a><br/>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
