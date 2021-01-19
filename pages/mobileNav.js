import { useState } from "react";
import styles from "../styles/MobileNav.module.css";
import Link from "next/link";

export default function MobileNav({ displayHomeButton }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <img
        src="/menu.png"
        alt="Menu Button"
        className={styles.menuButton}
        onClick={() => setModalOpen(true)}
      />
      {modalOpen ? (
        <div
          className={styles.modalContainer}
          onClick={() => setModalOpen(false)}
        >
          <nav className={styles.mobileNav}>
            <a href="https://bodymeat.bandcamp.com/" title="Body Meat Bandcamp">
              MUSIC
            </a>
            <Link href="/shows">
              <a title="List of all upcoming shows">LIVE</a>
            </Link>
            <a
              href="https://bodymeat.bandcamp.com/"
              title="Body Meat Merch Store"
            >
              STORE
            </a>
            <Link href="/contact">
              <a title="Contact Info Page">CONTACT</a>
            </Link>
            {displayHomeButton ? (
              <Link href="/">
                <a title="Home">HOME</a>
              </Link>
            ) : null}
          </nav>
          <img
            className={styles.exitButton}
            src="/x.png"
            alt="Exit Menu Button"
            onClick={() => setModalOpen(false)}
          />
        </div>
      ) : null}
    </>
  );
}
