'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Load build.min.js after DOM is mounted
  useEffect(() => {
    if (!mounted) return;

    let scrollHandler: (() => void) | null = null;

    const script = document.createElement('script');
    script.src = '/assets/dist/build.min.js';
    script.async = false;
    document.body.appendChild(script);

    script.onload = () => {
      console.log('build.min.js loaded');

      // Add template-homepage class to body (required for CSS)
      document.body.classList.add('template-homepage');

      // Force show content immediately
      setTimeout(() => {
        const container = document.querySelector(
          '.app-container'
        ) as HTMLElement;
        const pageContent = document.querySelector(
          '.page-inner-content'
        ) as HTMLElement;
        const homepageWrapper = document.querySelector(
          '.homepage-inner-wrapper'
        ) as HTMLElement;
        const boxHome = document.querySelector('.box--home') as HTMLElement;

        if (container) container.style.opacity = '1';
        if (pageContent) {
          pageContent.style.opacity = '1';
          pageContent.style.visibility = 'visible';
        }
        if (homepageWrapper) homepageWrapper.style.opacity = '1';
        if (boxHome) boxHome.style.opacity = '1';

        if (!document.documentElement.classList.contains('intro-ended')) {
          document.documentElement.classList.add('intro-ended');
        }

        // Manually add 'loaded' class to all lazy-media elements
        // Since we're using src (not data-src), we need to mark them as loaded
        const lazyMediaElements = document.querySelectorAll('.lazy-media');
        lazyMediaElements.forEach((el) => {
          el.classList.add('loaded');
        });

        // Add 'ready' class to sections that need it
        const blocProjectsListing = document.querySelector('.bloc-projects-listing');
        if (blocProjectsListing) {
          blocProjectsListing.classList.add('ready');
        }

        // Check for other elements that might need 'ready' or 'is-ready' classes
        const boxVideo = document.querySelector('.box--video');
        if (boxVideo) {
          const parent = boxVideo.closest('.plr-ready');
          if (!parent) {
            // If no parent has plr-ready, add it to body or main container
            document.body.classList.add('plr-ready');
          }
        }

        console.log(`Added 'loaded' class to ${lazyMediaElements.length} lazy-media elements`);
        console.log('Added ready classes to sections');

        // Initialize custom cursor tracking
        const initCustomCursor = () => {
          const cursorElements = document.querySelectorAll('.js-has-cursor-text');
          
          cursorElements.forEach((element) => {
            const cursorAnimated = element.querySelector('.cursor-text-animated') as HTMLElement;
            if (!cursorAnimated) return;

            const moovingElements = cursorAnimated.querySelectorAll('.mooving-elements') as NodeListOf<HTMLElement>;
            
            const handleMouseMove = (e: MouseEvent) => {
              const rect = element.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;

              moovingElements.forEach((el) => {
                const friction = parseFloat(el.getAttribute('data-friction') || '1');
                const adjustedX = x / friction;
                const adjustedY = y / friction;
                el.style.setProperty('--x', `${adjustedX}px`);
                el.style.setProperty('--y', `${adjustedY}px`);
              });
            };

            element.addEventListener('mouseenter', () => {
              cursorAnimated.classList.add('visible');
              element.addEventListener('mousemove', handleMouseMove);
            });

            element.addEventListener('mouseleave', () => {
              cursorAnimated.classList.remove('visible');
              element.removeEventListener('mousemove', handleMouseMove);
            });
          });

          console.log(`Initialized custom cursor for ${cursorElements.length} elements`);
        };

        // Initialize hover effects for project items
        // This adds the show-video class and handles video playback
        const projectLinks = document.querySelectorAll('.box--work__link.js-has-cursor-text');
        projectLinks.forEach((link) => {
          const videoWrapper = link.querySelector('.box--work__video');
          const video = link.querySelector('.js-video') as HTMLVideoElement;
          
          link.addEventListener('mouseenter', () => {
            if (videoWrapper) {
              videoWrapper.classList.add('show-video');
            }
            if (video && video.paused) {
              video.play().catch(e => console.log('Video autoplay prevented:', e));
            }
          });

          link.addEventListener('mouseleave', () => {
            if (videoWrapper) {
              videoWrapper.classList.remove('show-video');
            }
            if (video && !video.paused) {
              video.pause();
              video.currentTime = 0;
            }
          });
        });

        // Initialize all custom cursors
        initCustomCursor();

        // Initialize cursor player animation (for homepage video section)
        const initCursorPlayer = () => {
          const playerElements = document.querySelectorAll('.js-has-cursor-player');
          
          playerElements.forEach((element) => {
            const cursorAnimated = element.querySelector('.cursor-player-animated') as HTMLElement;
            if (!cursorAnimated) return;

            const moovingElements = cursorAnimated.querySelectorAll('.mooving-elements') as NodeListOf<HTMLElement>;
            
            const handleMouseMove = (e: MouseEvent) => {
              const rect = element.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;

              moovingElements.forEach((el) => {
                const friction = parseFloat(el.getAttribute('data-friction') || '1');
                const adjustedX = x / friction;
                const adjustedY = y / friction;
                el.style.setProperty('--x', `${adjustedX}px`);
                el.style.setProperty('--y', `${adjustedY}px`);
              });
            };

            element.addEventListener('mouseenter', () => {
              cursorAnimated.classList.add('visible');
              element.addEventListener('mousemove', handleMouseMove);
            });

            element.addEventListener('mouseleave', () => {
              cursorAnimated.classList.remove('visible');
              element.removeEventListener('mousemove', handleMouseMove);
            });
          });

          console.log(`Initialized cursor player for ${playerElements.length} elements`);
        };

        initCursorPlayer();

        // Initialize video switching for homepage slider
        const initVideoSwitcher = () => {
          const videoSwitchers = document.querySelectorAll('.js-change-video');
          const mainVideos = document.querySelectorAll('.js-main-video') as NodeListOf<HTMLVideoElement>;
          const playerVideos = document.querySelectorAll('.player-animated-player') as NodeListOf<HTMLVideoElement>;
          const listItems = document.querySelectorAll('.list--home > li');
          const counter = document.querySelector('.box--home__info__counter span');

          videoSwitchers.forEach((switcher, index) => {
            switcher.addEventListener('mouseenter', () => {
              // Update counter (1/7, 2/7, etc.)
              if (counter) {
                counter.textContent = `${index + 1}`;
              }

              // Update active state on list items
              listItems.forEach((item) => item.classList.remove('is-active'));
              const parentLi = switcher.closest('li');
              if (parentLi) parentLi.classList.add('is-active');

              // Switch main videos
              mainVideos.forEach((video, videoIndex) => {
                if (videoIndex === index) {
                  video.style.opacity = '1';
                  video.style.zIndex = '2';
                  if (video.paused) {
                    video.play().catch(e => console.log('Video autoplay prevented:', e));
                  }
                } else {
                  video.style.opacity = '0';
                  video.style.zIndex = '1';
                }
              });

              // Switch player preview videos (small cursor videos)
              playerVideos.forEach((video, videoIndex) => {
                if (videoIndex === index) {
                  video.classList.add('active');
                  if (video.paused) {
                    video.play().catch(e => console.log('Video autoplay prevented:', e));
                  }
                } else {
                  video.classList.remove('active');
                  video.pause();
                }
              });
            });
          });

          console.log(`Initialized video switcher for ${videoSwitchers.length} items`);
        };

        initVideoSwitcher();

        // Initialize intro animation if Lottie is available
        // The build.min.js should handle this, but we can trigger it
        const introAnim = document.querySelector('.intro-anim');
        if (introAnim) {
          const animPath = introAnim.getAttribute('data-animation');
          if (animPath && (window as any).lottie) {
            console.log('Lottie animation path:', animPath);
            // Lottie should be initialized by build.min.js
          }
        }

        // Initialize scroll detection for projects-nav visibility
        const initProjectsNavScroll = () => {
          const header = document.querySelector('header');
          const worksSection = document.querySelector('#works');
          
          if (!header || !worksSection) return;

          scrollHandler = () => {
            const worksRect = worksSection.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            
            // Show filter when works section is in view
            if (worksRect.top < viewportHeight && worksRect.bottom > 0) {
              if (!header.classList.contains('on-works-section')) {
                header.classList.add('on-works-section');
                console.log('🎯 Projects filter now visible - scrolled to works section');
              }
            } else {
              if (header.classList.contains('on-works-section')) {
                header.classList.remove('on-works-section');
                console.log('🎯 Projects filter hidden - scrolled away from works section');
              }
            }
          };

          window.addEventListener('scroll', scrollHandler);
          scrollHandler(); // Check initial state

          console.log('Initialized projects-nav scroll detection');
        };

        initProjectsNavScroll();

        // Initialize category filter functionality
        const initCategoryFilter = () => {
          const filterButtons = document.querySelectorAll('.js-filter-cat');
          const workItems = document.querySelectorAll('.box--work');

          filterButtons.forEach((button) => {
            button.addEventListener('click', (e) => {
              e.preventDefault();
              
              const category = button.getAttribute('data-cat');
              
              // Update active state
              filterButtons.forEach((btn) => btn.classList.remove('is-active'));
              button.classList.add('is-active');

              // Filter projects
              workItems.forEach((item) => {
                const itemCat = item.getAttribute('data-cat');
                
                if (category === '*' || itemCat === category) {
                  (item as HTMLElement).style.display = '';
                } else {
                  (item as HTMLElement).style.display = 'none';
                }
              });

              console.log(`Filtered projects by: ${category}`);
            });
          });

          // Set "all" as active by default
          const allFilter = document.querySelector('.js-filter-cat[data-cat="*"]');
          if (allFilter) allFilter.classList.add('is-active');

          console.log(`Initialized category filter with ${filterButtons.length} categories`);
        };

        initCategoryFilter();

        console.log('✅ All features initialized successfully');
        console.log(`- Lazy media: ${lazyMediaElements.length} elements`);
        console.log(`- Custom cursors: initialized`);
        console.log(`- Video hover: ${projectLinks.length} items`);
        console.log(`- Video switcher: initialized`);
        console.log(`- Projects nav: initialized`);
      }, 100);
    };

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      // Clean up scroll listener
      if (scrollHandler) {
        window.removeEventListener('scroll', scrollHandler);
      }
      // Remove template-homepage class
      document.body.classList.remove('template-homepage');
    };
  }, [mounted]);

  // Prevent SSR to avoid hydration errors from build.min.js
  if (!mounted) {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: '#000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff'
        }}>
        Loading...
      </div>
    );
  }

  return (
    <main className="main" suppressHydrationWarning>
      <div className="app-container" suppressHydrationWarning>
        <div className="app-container-inner" suppressHydrationWarning>
          <header className="header">
            <div className="header__nav">
              <Link href="/" data-navigo className="logo-link">
                <img
                  className="header__logo"
                  src="/assets/img/poster-logo-dark-bolder.svg"
                  alt="Poster"
                />
              </Link>
              <a href="#main_menu" className="btn btn--menu">
                <span>menu.</span>
              </a>
            </div>

            <div className="header__navigations-wrapper">
              <nav id="main_menu" className="header__subnav">
                <ul>
                  <li data-slug="homepage">
                    <Link
                      href="/"
                      data-navigo
                      data-slug="homepage"
                      aria-current="page"
                      className="force-active">
                      Homepage
                    </Link>
                  </li>
                  <li data-slug="works">
                    <Link
                      href="/works"
                      data-navigo
                      data-slug="works"
                      className="force-active">
                      Works
                    </Link>
                  </li>
                  <li data-slug="about">
                    <Link
                      href="/about"
                      data-navigo
                      data-slug="about"
                      className="force-active">
                      About
                    </Link>
                  </li>
                  <li data-slug="contact">
                    <Link
                      href="/contact"
                      data-navigo
                      data-slug="contact"
                      className="force-active">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="projects-nav">
                <ul className="list list--cat">
                  <li>
                    <a href="#works" className="js-filter-cat" data-cat="*">
                      all
                    </a>
                  </li>
                  <li>
                    <a
                      href="#works"
                      className="js-filter-cat"
                      data-cat="featured-film">
                      Featured film
                    </a>
                  </li>
                  <li>
                    <a
                      href="#works"
                      className="js-filter-cat"
                      data-cat="commercials">
                      Commercials
                    </a>
                  </li>
                  <li>
                    <a
                      href="#works"
                      className="js-filter-cat"
                      data-cat="music-videos">
                      Music videos
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </header>

          <div className="page-inner-content" suppressHydrationWarning>
            <div className="homepage-inner-wrapper" suppressHydrationWarning>
              <h1 className="hidden">Poster</h1>

              {/* Intro Animation */}
              <div className="bloc-intro" suppressHydrationWarning>
                <div className="intro-anim-surwrapper" suppressHydrationWarning>
                  <div className="intro-anim-wrapper" suppressHydrationWarning>
                    <div
                      className="intro-anim"
                      data-animation="/assets/img/intro-animation.json"
                      suppressHydrationWarning></div>
                  </div>
                </div>
                <div className="intro-timeline" suppressHydrationWarning>
                  <div className="inner" suppressHydrationWarning></div>
                </div>
              </div>

              {/* Video Slider Box */}
              <div className="box box--home" suppressHydrationWarning>
                <div className="box--home__info" suppressHydrationWarning>
                  <div className="box--home__info__counter">
                    <span>1</span>/7
                  </div>

                  <ul className="list list--home js-has-cursor-player">
                    <div className="cursor-player-animated js-cursor-player-animated">
                      <div
                        className="mooving-elements players-wrapper is-player"
                        data-friction="7">
                        <video
                          className="js-video player-animated-player"
                          src="https://player.vimeo.com/progressive_redirect/playback/1117423122/rendition/720p/file.mp4?loc=external&oauth2_token_id=1774001646&signature=2beba7d654e6bde289a39893a02343ccfe40c768e51f7d98da8907a47d67c6f3"
                          playsInline
                          loop
                          muted></video>
                        <video
                          className="js-video player-animated-player"
                          src="https://player.vimeo.com/progressive_redirect/playback/1115887892/rendition/720p/file.mp4?loc=external&oauth2_token_id=1774001646&signature=ce98919773ef73df7b06e9afe19bf78d05324f37484ab4206dc2f8a59df9f8a7"
                          playsInline
                          loop
                          muted></video>
                        <video
                          className="js-video player-animated-player"
                          src="https://player.vimeo.com/progressive_redirect/playback/1117421162/rendition/720p/file.mp4?loc=external&oauth2_token_id=1774001646&signature=29b653edb9566f10b387ea9e2c902828db43fd2acfea37f549b5e2f53a03a338"
                          playsInline
                          loop
                          muted></video>
                        <video
                          className="js-video player-animated-player"
                          src="https://player.vimeo.com/progressive_redirect/playback/1092256830/rendition/720p/file.mp4?loc=external&oauth2_token_id=1774001646&signature=87a0f012363c1d6c208d9266ea550a6971c69a28b495657bc35a91a5ae4cedfd"
                          playsInline
                          loop
                          muted></video>
                        <video
                          className="js-video player-animated-player"
                          src="https://player.vimeo.com/progressive_redirect/playback/1093092700/rendition/720p/file.mp4?loc=external&oauth2_token_id=1774001646&signature=54fa3bd06befbaeb0d163295a8827d121ea7ab412cc073b1d3d83568adba5804"
                          playsInline
                          loop
                          muted></video>
                        <video
                          className="js-video player-animated-player"
                          src="https://player.vimeo.com/progressive_redirect/playback/1092435994/rendition/720p/file.mp4?loc=external&oauth2_token_id=1774001646&signature=81e0513473978b86e7ab6890bc4e94edc9aa6a9b12d495b79844bb9c45c41ba1"
                          playsInline
                          loop
                          muted></video>
                        <video
                          className="js-video player-animated-player"
                          src="https://player.vimeo.com/progressive_redirect/playback/1092250725/rendition/720p/file.mp4?loc=external&oauth2_token_id=1774001646&signature=f87e6a4cd8dcaaee2de035bc047ad27558ea34cf32388b15edcd8062a6d9ef71"
                          playsInline
                          loop
                          muted></video>
                      </div>
                    </div>

                    <li className="is-active">
                      <a
                        href="works/veuve-clicquot-x-jacquemus.html"
                        className="js-change-video">
                        <h2>Veuve Clicquot x Jacquemus</h2>
                        <p>Jonas Lindstroem</p>
                        <p>Commercials</p>
                      </a>
                    </li>

                    <li>
                      <a
                        href="works/dior-sauvage-2025.html"
                        className="js-change-video">
                        <h2>Dior Sauvage</h2>
                        <p>Jean-Baptiste Mondino</p>
                        <p>Commercials</p>
                      </a>
                    </li>

                    <li>
                      <a
                        href="works/miss-dior.html"
                        className="js-change-video">
                        <h2>Miss Dior</h2>
                        <p>Manu Cossu</p>
                        <p>Commercials</p>
                      </a>
                    </li>

                    <li>
                      <a href="works/kenzo.html" className="js-change-video">
                        <h2>Eau Pure</h2>
                        <p>Manu Cossu</p>
                        <p>Commercials</p>
                      </a>
                    </li>

                    <li>
                      <a
                        href="works/vacheron-constantin.html"
                        className="js-change-video">
                        <h2>Conquest of Space</h2>
                        <p>Arnaud Bresson</p>
                        <p>Commercials</p>
                      </a>
                    </li>

                    <li>
                      <a
                        href="works/federation-francaise-de-tennis.html"
                        className="js-change-video">
                        <h2>FFT</h2>
                        <p>Only at Roland Garros</p>
                        <p>Commercials</p>
                      </a>
                    </li>

                    <li>
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

                <a
                  href="works/veuve-clicquot-x-jacquemus.html"
                  data-navigo
                  className="box--home__link js-has-cursor-text"
                  suppressHydrationWarning>
                  <div
                    className="box--home__wrapper video-wrapper"
                    suppressHydrationWarning>
                    <video
                      className="js-main-video"
                      src="https://player.vimeo.com/progressive_redirect/playback/1117423122/rendition/1080p/file.mp4?loc=external&oauth2_token_id=1774001646&signature=ca2f821a9f70cfac6cad54c7fbf2e150032578e63442cbcdedb2634910e6c9b4"
                      muted
                      playsInline></video>

                    <video
                      className="js-main-video"
                      src="https://player.vimeo.com/progressive_redirect/playback/1115887892/rendition/1080p/file.mp4?loc=external&oauth2_token_id=1774001646&signature=3c1f344ded2ffbd4257e7f9cba56f778a638504b8837a5b7bd9225297fe868bc"
                      muted
                      playsInline></video>

                    <video
                      className="js-main-video"
                      src="https://player.vimeo.com/progressive_redirect/playback/1117421162/rendition/1080p/file.mp4?loc=external&oauth2_token_id=1774001646&signature=621299972eda80a99176f2119c8bb7d9aa1d00ef3f5798144a2c0d50732de5a5"
                      muted
                      playsInline></video>

                    <video
                      className="js-main-video"
                      src="https://player.vimeo.com/progressive_redirect/playback/1092256830/rendition/1080p/file.mp4?loc=external&oauth2_token_id=1774001646&signature=aef92d5899a60fd514bebf35f86cb01466eb26ce6702fae05f92b7f915db1262"
                      muted
                      playsInline></video>

                    <video
                      className="js-main-video"
                      src="https://player.vimeo.com/progressive_redirect/playback/1093092700/rendition/1080p/file.mp4?loc=external&oauth2_token_id=1774001646&signature=225d96136f12cb5672a0abebfbebdd69914a3c23fe3985f08b03f0493afa78fc"
                      muted
                      playsInline></video>

                    <video
                      className="js-main-video"
                      src="https://player.vimeo.com/progressive_redirect/playback/1092435994/rendition/1080p/file.mp4?loc=external&oauth2_token_id=1774001646&signature=b970c2f226694ffc684fd38c56fd66df0762d42550ed62af1719cfe36c8654e5"
                      muted
                      playsInline></video>

                    <video
                      className="js-main-video"
                      src="https://player.vimeo.com/progressive_redirect/playback/1092250725/rendition/1080p/file.mp4?loc=external&oauth2_token_id=1774001646&signature=f5b0c83ca1cdfc0b7e7c7d5a591584fb7d209d424d536de1f158cf96380bad2a"
                      muted
                      playsInline></video>
                  </div>
                  <div
                    className="cursor-text-animated js-cursor-text-animated"
                    suppressHydrationWarning>
                    <div
                      className="mooving-elements is-arrow"
                      data-friction="1"
                      suppressHydrationWarning>
                      <svg
                        width="11"
                        height="10"
                        viewBox="0 0 11 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M8.72366 3.91174H7.0685L5.14349 3.8482L6.53777 4.99985L8.40882 6.65189L7.19444 7.72412L5.3234 6.07209L4.01007 4.83306L4.07303 6.50892L4.06404 8.02593L2.3819 6.54069L2.39989 2.42649L7.04152 2.42649L8.72366 3.91174Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div
                      className="mooving-elements shift cursor-main-text"
                      data-friction="5"
                      suppressHydrationWarning>
                      open Veuve Clicquot x Jacquemus
                    </div>
                  </div>
                </a>

                <div
                  className="box--home__buttons-mobile"
                  suppressHydrationWarning>
                  <a
                    href="works/veuve-clicquot-x-jacquemus.html"
                    data-navigo
                    className="mobile-link">
                    view project
                  </a>
                  <div className="arrows">
                    <button className="arrow-prev">←</button>
                    <button className="arrow-next">→</button>
                  </div>
                </div>
              </div>

              {/* Projects Grid Section */}
              <div className="bloc-projects-listing">
                <ul id="works" className="list list--works">
                  <li className="box box--work" data-cat="commercials">
                    <a
                      href="works/veuve-clicquot-x-jacquemus.html"
                      data-navigo
                      className="box--work__link js-has-cursor-text">
                      <div className="box--work__info">
                        <h2>Veuve Clicquot x Jacquemus</h2>
                        <p>Jonas Lindstroem</p>
                        <p>Commercials</p>
                      </div>

                      <div className="box--work__video video-wrapper has-poster">
                        <img
                          className="video-img-poster lazy-media"
                          src="https://posterco.tv/media/pages/works/veuve-clicquot-x-jacquemus/f467980f83-1757508080/vlcsnap-2025-09-09-17h13m46s724.jpg"
                          srcSet="https://posterco.tv/media/pages/works/veuve-clicquot-x-jacquemus/f467980f83-1757508080/vlcsnap-2025-09-09-17h13m46s724-300x.jpg 300w, https://posterco.tv/media/pages/works/veuve-clicquot-x-jacquemus/f467980f83-1757508080/vlcsnap-2025-09-09-17h13m46s724-800x.jpg 800w"
                          alt=""
                        />
                        <video
                          className="js-video lazy-media"
                          src="https://player.vimeo.com/progressive_redirect/playback/1117423122/rendition/720p/file.mp4?loc=external&oauth2_token_id=1774001646&signature=2beba7d654e6bde289a39893a02343ccfe40c768e51f7d98da8907a47d67c6f3"
                          playsInline
                          loop
                          muted></video>
                      </div>
                      <div className="cursor-text-animated js-cursor-text-animated">
                        <div
                          className="mooving-elements is-arrow"
                          data-friction="1">
                          <svg
                            width="11"
                            height="10"
                            viewBox="0 0 11 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M8.72366 3.91174H7.0685L5.14349 3.8482L6.53777 4.99985L8.40882 6.65189L7.19444 7.72412L5.3234 6.07209L4.01007 4.83306L4.07303 6.50892L4.06404 8.02593L2.3819 6.54069L2.39989 2.42649L7.04152 2.42649L8.72366 3.91174Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <div
                          className="mooving-elements shift cursor-main-text"
                          data-friction="5">
                          <h2>Veuve Clicquot x Jacquemus</h2>
                          <p>Jonas Lindstroem</p>
                          <p>Commercials</p>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li className="box box--work" data-cat="commercials">
                    <a
                      href="works/dior-sauvage-2025.html"
                      data-navigo
                      className="box--work__link js-has-cursor-text">
                      <div className="box--work__info">
                        <h2>Dior Sauvage</h2>
                        <p>Jean-Baptiste Mondino</p>
                        <p>Commercials</p>
                      </div>

                      <div className="box--work__video video-wrapper has-poster">
                        <img
                          className="video-img-poster lazy-media"
                          src="https://posterco.tv/media/pages/works/dior-sauvage-2025/a4ff1365d5-1757003605/poster-jb-mondinoxdior-sauvage-2025.jpg"
                          srcSet="https://posterco.tv/media/pages/works/dior-sauvage-2025/a4ff1365d5-1757003605/poster-jb-mondinoxdior-sauvage-2025-300x.jpg 300w, https://posterco.tv/media/pages/works/dior-sauvage-2025/a4ff1365d5-1757003605/poster-jb-mondinoxdior-sauvage-2025-800x.jpg 800w"
                          alt=""
                        />
                        <video
                          className="js-video lazy-media"
                          src="https://player.vimeo.com/progressive_redirect/playback/1115887892/rendition/720p/file.mp4?loc=external&oauth2_token_id=1774001646&signature=ce98919773ef73df7b06e9afe19bf78d05324f37484ab4206dc2f8a59df9f8a7"
                          playsInline
                          loop
                          muted></video>
                      </div>
                      <div className="cursor-text-animated js-cursor-text-animated">
                        <div className="mooving-elements is-arrow" data-friction="1">
                          <svg
                            width="11"
                            height="10"
                            viewBox="0 0 11 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M8.72366 3.91174H7.0685L5.14349 3.8482L6.53777 4.99985L8.40882 6.65189L7.19444 7.72412L5.3234 6.07209L4.01007 4.83306L4.07303 6.50892L4.06404 8.02593L2.3819 6.54069L2.39989 2.42649L7.04152 2.42649L8.72366 3.91174Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <div
                          className="mooving-elements shift cursor-main-text"
                          data-friction="5">
                          <h2>Dior Sauvage</h2>
                          <p>Jean-Baptiste Mondino</p>
                          <p>Commercials</p>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li className="box box--work" data-cat="commercials">
                    <a
                      href="works/miss-dior.html"
                      data-navigo
                      className="box--work__link js-has-cursor-text">
                      <div className="box--work__info">
                        <h2>Miss Dior</h2>
                        <p>Manu Cossu</p>
                        <p>Commercials</p>
                      </div>

                      <div className="box--work__video video-wrapper has-poster">
                        <img
                          className="video-img-poster lazy-media"
                          src="https://posterco.tv/media/pages/works/miss-dior/3aff5631b3-1757508014/vlcsnap-2025-09-08-18h06m11s355.jpg"
                          srcSet="https://posterco.tv/media/pages/works/miss-dior/3aff5631b3-1757508014/vlcsnap-2025-09-08-18h06m11s355-300x.jpg 300w, https://posterco.tv/media/pages/works/miss-dior/3aff5631b3-1757508014/vlcsnap-2025-09-08-18h06m11s355-800x.jpg 800w"
                          alt=""
                        />
                        <video
                          className="js-video lazy-media"
                          src="https://player.vimeo.com/progressive_redirect/playback/1117421162/rendition/720p/file.mp4?loc=external&oauth2_token_id=1774001646&signature=29b653edb9566f10b387ea9e2c902828db43fd2acfea37f549b5e2f53a03a338"
                          playsInline
                          loop
                          muted></video>
                      </div>
                      <div className="cursor-text-animated js-cursor-text-animated">
                        <div
                          className="mooving-elements is-arrow"
                          data-friction="1">
                          <svg
                            width="11"
                            height="10"
                            viewBox="0 0 11 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M8.72366 3.91174H7.0685L5.14349 3.8482L6.53777 4.99985L8.40882 6.65189L7.19444 7.72412L5.3234 6.07209L4.01007 4.83306L4.07303 6.50892L4.06404 8.02593L2.3819 6.54069L2.39989 2.42649L7.04152 2.42649L8.72366 3.91174Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <div
                          className="mooving-elements shift cursor-main-text"
                          data-friction="5">
                          <h2>Miss Dior</h2>
                          <p>Manu Cossu</p>
                          <p>Commercials</p>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li className="box box--work" data-cat="commercials">
                    <a
                      href="works/kenzo.html"
                      data-navigo
                      className="box--work__link js-has-cursor-text">
                      <div className="box--work__info">
                        <h2>Eau Pure</h2>
                        <p>Manu Cossu</p>
                        <p>Commercials</p>
                      </div>

                      <div className="box--work__video video-wrapper has-poster">
                        <img
                          className="video-img-poster lazy-media"
                          src="https://posterco.tv/media/pages/works/kenzo/b9db050d4a-1749595358/vlcsnap-2025-06-11-00h23m53s748-min.png"
                          srcSet="https://posterco.tv/media/pages/works/kenzo/b9db050d4a-1749595358/vlcsnap-2025-06-11-00h23m53s748-min-300x.png 300w, https://posterco.tv/media/pages/works/kenzo/b9db050d4a-1749595358/vlcsnap-2025-06-11-00h23m53s748-min-800x.png 800w"
                          alt=""
                        />
                        <video
                          className="js-video lazy-media"
                          src="https://player.vimeo.com/progressive_redirect/playback/1092256830/rendition/720p/file.mp4?loc=external&oauth2_token_id=1774001646&signature=87a0f012363c1d6c208d9266ea550a6971c69a28b495657bc35a91a5ae4cedfd"
                          playsInline
                          loop
                          muted></video>
                      </div>
                      <div className="cursor-text-animated js-cursor-text-animated">
                        <div
                          className="mooving-elements is-arrow"
                          data-friction="1">
                          <svg
                            width="11"
                            height="10"
                            viewBox="0 0 11 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M8.72366 3.91174H7.0685L5.14349 3.8482L6.53777 4.99985L8.40882 6.65189L7.19444 7.72412L5.3234 6.07209L4.01007 4.83306L4.07303 6.50892L4.06404 8.02593L2.3819 6.54069L2.39989 2.42649L7.04152 2.42649L8.72366 3.91174Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <div
                          className="mooving-elements shift cursor-main-text"
                          data-friction="5">
                          <h2>Eau Pure</h2>
                          <p>Manu Cossu</p>
                          <p>Commercials</p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
