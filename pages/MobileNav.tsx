import { ReactElement, useState } from "react";
import Link from "next/link";
import styles from "../styles/MobileNav.module.css";

const MobileNav = ({
  displayHomeButton,
}: {
  displayHomeButton?: boolean;
}): ReactElement => {
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
              title="Link to all upcoming shows"
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
};

export default MobileNav;
