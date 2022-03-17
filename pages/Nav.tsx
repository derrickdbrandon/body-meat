import { ReactElement } from "react";
import Link from "next/link";
import styles from "../styles/Nav.module.css";

const Nav = (): ReactElement => {
  return (
    <nav className={styles.navWrapper}>
      <div className={styles.nav}>
        <a
          href="https://bodymeat.bandcamp.com/"
          title="Body Meat Bandcamp"
          target="_blank"
          rel="noopener noreferrer"
        >
          MUSIC
        </a>
        <a
          href="http://www.groundcontroltouring.com/tours/body-meat"
          title="Link of all upcoming shows"
          target="_blank"
          rel="noopener noreferrer"
        >
          LIVE
        </a>
        <a
          href="https://bodymeat.bandcamp.com/"
          title="Body Meat Merch Store"
          target="_blank"
          rel="noopener noreferrer"
        >
          STORE
        </a>
        <Link href="/contact">
          <a title="Contact Info Page">CONTACT</a>
        </Link>
      </div>
      <Link href="/">
        <a className={styles.logoWrapper}>
          <img src="/logo.png" alt="Body Meat Logo" className={styles.logo} />
        </a>
      </Link>
      <div className={styles.links}>
        <a
          href="https://music.apple.com/us/artist/body-meat/1441897617"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/apple.svg"
            alt="Apple Music"
            className={styles.appleMusicLogo}
          />
        </a>
        <a
          href="https://open.spotify.com/artist/4BrSvpXSgT02JhhNULggJk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/spotify.png"
            alt="Spotify"
            className={styles.spotifyLogo}
          />
        </a>
        <a
          href="https://www.youtube.com/channel/UCeFFP3mYQPzGqcbmj4__gDg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/youtube.png"
            alt="YouTube"
            className={styles.youtubeLogo}
          />
        </a>
        <a
          href="https://www.instagram.com/bodymeatco"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/instagram.svg"
            alt="Instagram"
            className={styles.instagramLogo}
          />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
