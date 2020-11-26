import styles from "../styles/Nav.module.css";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className={styles.navWrapper}>
      <div className={styles.nav}>
        <a href="https://bodymeat.bandcamp.com/" title="Body Meat Bandcamp">
          MUSIC
        </a>
        <Link href="/shows">
          <a title="List of all upcoming shows">LIVE</a>
        </Link>
        <a
          href="https://thehyv.shop/collections/body-meat"
          title="Body Meat Merch Store"
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
        <a>
          <img
            href="https://music.apple.com/us/artist/body-meat/1441897617"
            src="/apple.svg"
            alt="Apple Music"
            className={styles.appleMusicLogo}
          />
        </a>
        <a>
          <img
            href="https://open.spotify.com/artist/4BrSvpXSgT02JhhNULggJk"
            src="/spotify.png"
            alt="Spotify"
            className={styles.spotifyLogo}
          />
        </a>
        <a>
          <img
            href="https://www.youtube.com/channel/UCeFFP3mYQPzGqcbmj4__gDg"
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