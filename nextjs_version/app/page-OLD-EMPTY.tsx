'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function HomePage() {
  useEffect(() => {
    // Ensure DOM is ready before original JS runs
    console.log('Page loaded, DOM ready');
  }, []);
  return (
    <>
      <main className="main">
        <div className="app-container">
          <div className="app-container-inner">
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
                      <Link href="/" data-navigo data-slug="homepage" aria-current="page" className="force-active">
                        Homepage
                      </Link>
                    </li>
                    <li data-slug="works">
                      <Link href="/works" data-navigo data-slug="works" className="force-active">
                        Works
                      </Link>
                    </li>
                    <li data-slug="about">
                      <Link href="/about" data-navigo data-slug="about" className="force-active">
                        About
                      </Link>
                    </li>
                    <li data-slug="contact">
                      <Link href="/contact" data-navigo data-slug="contact" className="force-active">
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
              <div className="homepage-inner-wrapper">
                <h1 className="hidden">Poster</h1>
                
                {/* Intro Animation */}
                <div className="bloc-intro">
                  <div className="intro-anim-surwrapper">
                    <div className="intro-anim-wrapper">
                      <div className="intro-anim" data-animation="/assets/img/intro-animation.json"></div>
                    </div>
                  </div>
                  <div className="intro-timeline"><div className="inner"></div></div>
                </div>
                
                {/* Rest of content will be managed by original JS */}
                <div className="box box--home">
                  <div className="box--home__info">
                    <div className="box--home__info__counter">
                      <span>1</span>/7
                    </div>
                    
                    <ul className="list list--home js-has-cursor-player">
                      {/* Content managed by original JS */}
                    </ul>
                    
                    <div className="box--home__timeline">
                      <span className="is-animated"></span>
                    </div>
                  </div>
                  
                  <a href="#" data-navigo className="box--home__link js-has-cursor-text">
                    <div className="box--home__wrapper video-wrapper">
                      {/* Videos managed by original JS */}
                    </div>
                  </a>
                  
                  <div className="box--home__buttons-mobile">
                    <a href="#" data-navigo className="mobile-link">view project</a>
                    <div className="arrows">
                      <button className="arrow-prev">←</button>
                      <button className="arrow-next">→</button>
                    </div>
                  </div>
                </div>
                
                {/* Projects Listing */}
                <div className="bloc-projects-listing">
                  <ul id="works" className="list list--works">
                    {/* Projects managed by original JS/HTML */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
