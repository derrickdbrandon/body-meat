import styles from "../styles/Nav.module.css";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className={styles.navWrapper}>
      <div className={styles.nav}>
        <a href="https://bodymeat.bandcamp.com/" title="Body Meat Bandcamp">
          MUSIC
        </a>
        <Link href="http://www.groundcontroltouring.com/tours/body-meat">
          <a title="Link of all upcoming shows">LIVE</a>
        </Link>
        <a href="https://bodymeat.bandcamp.com/" title="Body Meat Merch Store">
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
        <a href="https://music.apple.com/us/artist/body-meat/1441897617">
          <img
            src="/apple.svg"
            alt="Apple Music"
            className={styles.appleMusicLogo}
          />
        </a>
        <a href="https://open.spotify.com/artist/4BrSvpXSgT02JhhNULggJk">
          <img
            src="/spotify.png"
            alt="Spotify"
            className={styles.spotifyLogo}
          />
        </a>
        <a href="https://www.youtube.com/channel/UCeFFP3mYQPzGqcbmj4__gDg">
          <img
            src="/youtube.png"
            alt="YouTube"
            className={styles.youtubeLogo}
          />
        </a>
        <a href="https://www.instagram.com/bodymeatco">
          <img
            src="/instagram.svg"
            alt="Instagram"
            className={styles.instagramLogo}
          />
        </a>
      </div>
    </nav>
  );
}
