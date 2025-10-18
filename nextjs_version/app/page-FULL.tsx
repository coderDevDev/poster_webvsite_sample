'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function HomePage() {
  useEffect(() => {
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
                
                {/* Video Slider */}
                <div className="box box--home">
                  <div className="box--home__info">
                    <div className="box--home__info__counter">
                      <span>1</span>/7
                    </div>
                    
                    <ul className="list list--home js-has-cursor-player">
                      <div className="cursor-player-animated js-cursor-player-animated">
                        <div className="mooving-elements players-wrapper is-player" data-friction="7">
                          <video className="js-video player-animated-player" data-src="https://player.vimeo.com/progressive_redirect/playback/1117423122/rendition/720p/file.mp4?loc=external&oauth2_token_id=1774001646&signature=2beba7d654e6bde289a39893a02343ccfe40c768e51f7d98da8907a47d67c6f3" playsInline loop muted></video>
                          <video className="js-video player-animated-player" data-src="https://player.vimeo.com/progressive_redirect/playback/1115887892/rendition/720p/file.mp4?loc=external&oauth2_token_id=1774001646&signature=ce98919773ef73df7b06e9afe19bf78d05324f37484ab4206dc2f8a59df9f8a7" playsInline loop muted></video>
                          <video className="js-video player-animated-player" data-src="https://player.vimeo.com/progressive_redirect/playback/1117421162/rendition/720p/file.mp4?loc=external&oauth2_token_id=1774001646&signature=29b653edb9566f10b387ea9e2c902828db43fd2acfea37f549b5e2f53a03a338" playsInline loop muted></video>
                          <video className="js-video player-animated-player" data-src="https://player.vimeo.com/progressive_redirect/playback/1092256830/rendition/720p/file.mp4?loc=external&oauth2_token_id=1774001646&signature=87a0f012363c1d6c208d9266ea550a6971c69a28b495657bc35a91a5ae4cedfd" playsInline loop muted></video>
                          <video className="js-video player-animated-player" data-src="https://player.vimeo.com/progressive_redirect/playback/1093092700/rendition/720p/file.mp4?loc=external&oauth2_token_id=1774001646&signature=54fa3bd06befbaeb0d163295a8827d121ea7ab412cc073b1d3d83568adba5804" playsInline loop muted></video>
                          <video className="js-video player-animated-player" data-src="https://player.vimeo.com/progressive_redirect/playback/1092435994/rendition/720p/file.mp4?loc=external&oauth2_token_id=1774001646&signature=81e0513473978b86e7ab6890bc4e94edc9aa6a9b12d495b79844bb9c45c41ba1" playsInline loop muted></video>
                          <video className="js-video player-animated-player" data-src="https://player.vimeo.com/progressive_redirect/playback/1092250725/rendition/720p/file.mp4?loc=external&oauth2_token_id=1774001646&signature=f87e6a4cd8dcaaee2de035bc047ad27558ea34cf32388b15edcd8062a6d9ef71" playsInline loop muted></video>
                        </div>
                      </div>
                      
                      <li className="is-active">
                        <a href="works/veuve-clicquot-x-jacquemus.html" className="js-change-video">
                          <h2>Veuve Clicquot x Jacquemus</h2>
                          <p>Jonas Lindstroem</p>
                          <p>Commercials</p>
                        </a>
                      </li>
                      
                      <li className="">
                        <a href="works/dior-sauvage-2025.html" className="js-change-video">
                          <h2>Dior Sauvage</h2>
                          <p>Jean-Baptiste Mondino</p>
                          <p>Commercials</p>
                        </a>
                      </li>
                      
                      <li className="">
                        <a href="works/miss-dior.html" className="js-change-video">
                          <h2>Miss Dior</h2>
                          <p>Manu Cossu</p>
                          <p>Commercials</p>
                        </a>
                      </li>
                      
                      <li className="">
                        <a href="works/kenzo.html" className="js-change-video">
                          <h2>Eau Pure</h2>
                          <p>Manu Cossu</p>
                          <p>Commercials</p>
                        </a>
                      </li>
                      
                      <li className="">
                        <a href="works/vacheron-constantin.html" className="js-change-video">
                          <h2>Conquest of Space</h2>
                          <p>Arnaud Bresson</p>
                          <p>Commercials</p>
                        </a>
                      </li>
                      
                      <li className="">
                        <a href="works/federation-francaise-de-tennis.html" className="js-change-video">
                          <h2>FFT</h2>
                          <p>Only at Roland Garros</p>
                          <p>Commercials</p>
                        </a>
                      </li>
                      
                      <li className="">
                        <a href="works/rabanne.html" className="js-change-video">
                          <h2>From Sunset to Sunrise</h2>
                          <p>Manu Cossu</p>
                          <p>Commercials</p>
                        </a>
                      </li>
                    </ul>
                    
                    <div className="box--home__timeline">
                      <span className="is-animated"></span>
                    </div>
                  </div>
                  
                  <a href="works/veuve-clicquot-x-jacquemus.html" data-navigo className="box--home__link js-has-cursor-text">
                    <div className="box--home__wrapper video-wrapper">
                      <video className="js-main-video" data-src="https://player.vimeo.com/progressive_redirect/playback/1117423122/rendition/1080p/file.mp4?loc=external&oauth2_token_id=1774001646&signature=ca2f821a9f70cfac6cad54c7fbf2e150032578e63442cbcdedb2634910e6c9b4" muted playsInline></video>
                      <video className="js-main-video" data-src="https://player.vimeo.com/progressive_redirect/playback/1115887892/rendition/1080p/file.mp4?loc=external&oauth2_token_id=1774001646&signature=3c1f344ded2ffbd4257e7f9cba56f778a638504b8837a5b7bd9225297fe868bc" muted playsInline></video>
                      <video className="js-main-video" data-src="https://player.vimeo.com/progressive_redirect/playback/1117421162/rendition/1080p/file.mp4?loc=external&oauth2_token_id=1774001646&signature=621299972eda80a99176f2119c8bb7d9aa1d00ef3f5798144a2c0d50732de5a5" muted playsInline></video>
                      <video className="js-main-video" data-src="https://player.vimeo.com/progressive_redirect/playback/1092256830/rendition/1080p/file.mp4?loc=external&oauth2_token_id=1774001646&signature=aef92d5899a60fd514bebf35f86cb01466eb26ce6702fae05f92b7f915db1262" muted playsInline></video>
                      <video className="js-main-video" data-src="https://player.vimeo.com/progressive_redirect/playback/1093092700/rendition/1080p/file.mp4?loc=external&oauth2_token_id=1774001646&signature=225d96136f12cb5672a0abebfbebdd69914a3c23fe3985f08b03f0493afa78fc" muted playsInline></video>
                      <video className="js-main-video" data-src="https://player.vimeo.com/progressive_redirect/playback/1092435994/rendition/1080p/file.mp4?loc=external&oauth2_token_id=1774001646&signature=b970c2f226694ffc684fd38c56fd66df0762d42550ed62af1719cfe36c8654e5" muted playsInline></video>
                      <video className="js-main-video" data-src="https://player.vimeo.com/progressive_redirect/playback/1092250725/rendition/1080p/file.mp4?loc=external&oauth2_token_id=1774001646&signature=f5b0c83ca1cdfc0b7e7c7d5a591584fb7d209d424d536de1f158cf96380bad2a" muted playsInline></video>
                    </div>
                    <div className="cursor-text-animated js-cursor-text-animated">
                      <div className="mooving-elements is-arrow" data-friction="1">
                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.72366 3.91174H7.0685L5.14349 3.8482L6.53777 4.99985L8.40882 6.65189L7.19444 7.72412L5.3234 6.07209L4.01007 4.83306L4.07303 6.50892L4.06404 8.02593L2.3819 6.54069L2.39989 2.42649L7.04152 2.42649L8.72366 3.91174Z" fill="white"/>
                        </svg>
                      </div>
                      <div className="mooving-elements shift cursor-main-text" data-friction="5">open Veuve Clicquot x Jacquemus</div>
                    </div>
                  </a>
                  
                  <div className="box--home__buttons-mobile">
                    <a href="works/veuve-clicquot-x-jacquemus.html" data-navigo className="mobile-link">view project</a>
                    <div className="arrows">
                      <button className="arrow-prev">←</button>
                      <button className="arrow-next">→</button>
                    </div>
                  </div>
                </div>
                
                {/* Projects Listing - THIS IS THE KEY PART! */}
                <div className="bloc-projects-listing">
                  <ul id="works" className="list list--works">
                    {/* Project 1 */}
                    <li className="box box--work" data-cat="commercials">
                      <a href="works/veuve-clicquot-x-jacquemus.html" data-navigo className="box--work__link js-has-cursor-text">
                        <div className="box--work__info">
                          <h2>Veuve Clicquot x Jacquemus</h2>
                          <p>Jonas Lindstroem</p>
                          <p>Commercials</p>
                        </div>
                        <div className="box--work__video video-wrapper has-poster">
                          <img className="video-img-poster lazy-media" data-src="https://posterco.tv/media/pages/works/veuve-clicquot-x-jacquemus/f467980f83-1757508080/vlcsnap-2025-09-09-17h13m46s724.jpg" data-srcset="https://posterco.tv/media/pages/works/veuve-clicquot-x-jacquemus/f467980f83-1757508080/vlcsnap-2025-09-09-17h13m46s724-300x.jpg 300w, https://posterco.tv/media/pages/works/veuve-clicquot-x-jacquemus/f467980f83-1757508080/vlcsnap-2025-09-09-17h13m46s724-800x.jpg 800w" alt="" />
                          <video className="js-video lazy-media" data-src="https://player.vimeo.com/progressive_redirect/playback/1117423122/rendition/720p/file.mp4?loc=external&oauth2_token_id=1774001646&signature=2beba7d654e6bde289a39893a02343ccfe40c768e51f7d98da8907a47d67c6f3" playsInline loop muted></video>
                        </div>
                        <div className="cursor-text-animated js-cursor-text-animated">
                          <div className="mooving-elements is-arrow" data-friction="1">
                            <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8.72366 3.91174H7.0685L5.14349 3.8482L6.53777 4.99985L8.40882 6.65189L7.19444 7.72412L5.3234 6.07209L4.01007 4.83306L4.07303 6.50892L4.06404 8.02593L2.3819 6.54069L2.39989 2.42649L7.04152 2.42649L8.72366 3.91174Z" fill="white"/>
                            </svg>
                          </div>
                          <div className="mooving-elements shift cursor-main-text" data-friction="5"><h2>Veuve Clicquot x Jacquemus</h2><p>Jonas Lindstroem</p><p>Commercials</p></div>
                        </div>
                      </a>
                    </li>

                    {/* Add more projects below - due to length, I'll create a data file approach instead */}
                   
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
