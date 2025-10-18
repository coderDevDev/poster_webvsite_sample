'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function AboutPage() {
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
                    <Link href="/about" data-navigo data-slug="about" aria-current="page">
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
            </div>
          </header>
          
          <div className="page-inner-content">
            <h1 className="hidden">About</h1>

            <div className="about-inner-wrapper">
              <div className="content-wrapper">
                <div className="box box--about">
                  Located in the heart of Paris, our offices are dedicated to audiovisual production, where the expertise and commitment of our teams enable us to bring a wide variety of projects to life: multi-platform advertisements, digital content, music videos, feature films, documentaries, and live performance recordings.<br />
                  <br />
                  Every project is a unique journey for us. We strive to assemble the most suitable team to meet our clients' specific expectations, combining in-house talent with freelance experts. With an approach that is both meticulous and human-centered, we ensure impeccable quality at every stage.<br />
                  <br />
                  Beyond production, we oversee the entire creative process. From preproduction to final delivery, we adapt to the unique characteristics of each project to offer personalized and attentive support.
                </div>
                <button className="player-link js-open-popin-video">
                  <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.25 4.56699C7.58333 4.75944 7.58333 5.24056 7.25 5.43301L1.25 8.89711C0.916667 9.08956 0.500001 8.849 0.500001 8.4641L0.500001 1.5359C0.500001 1.151 0.916668 0.910436 1.25 1.10289L7.25 4.56699Z" stroke="currentColor"/>
                  </svg>
                  view Poster reel 2025
                </button>
              </div>

              <ul className="list list--about-images">
                <li>
                  <img className="pic" src="/media/pages/about/6f8ea45b91-1724948873/adv-architecture-et-agencement-advstudio-1.jpg" alt="" />
                </li>
                <li>
                  <img className="pic" src="/media/pages/about/9a13aa90ff-1724948879/adv-architecture-et-agencement-advstudio-2.jpg" alt="" />
                </li>
                <li>
                  <img className="pic" src="/media/pages/about/570a1d755d-1724948885/adv-architecture-et-agencement-advstudio-3.jpg" alt="" />
                </li>
                <li>
                  <img className="pic" src="/media/pages/about/fe3e83c953-1724948891/adv-architecture-et-agencement-advstudio.jpg" alt="" />
                </li>
              </ul>
            </div>

            <div className="popin popin-video js-popin-video" data-popin-name="video">
              <div className="video-infos">
                <h2>Poster reel 2025</h2>
              </div>
              <button className="lnk lnk--through popin-close js-close-popin-video">close</button>
              <div className="box--video__wrapper video-wrapper js-player fit-cover">
                <video src="https://player.vimeo.com/progressive_redirect/playback/1037524789/rendition/1080p/file.mp4?loc=external&oauth2_token_id=1774001646&signature=912fcae972afe8fe4920f8b76e89921da82f7018a5dfdc50e539d7733d7caefc" playsInline></video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
