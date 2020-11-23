import { useState } from "react";

import styles from "../styles/MobileNav.module.css";

export default function MobileNav() {
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
            <a href="/shows" title="List of all upcoming shows">
              LIVE
            </a>
            <a
              href="https://thehyv.shop/collections/body-meat"
              title="Body Meat Merch Store"
            >
              STORE
            </a>
            <a href="/contact" title="Contact Info Page">
              CONTACT
            </a>
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
