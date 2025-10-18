'use client'

import Link from 'next/link'

export default function Header() {
  return (
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
              <Link href="/" data-navigo data-slug="homepage" className="force-active">
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
  )
}
