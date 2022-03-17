import React, { ReactElement, useState } from "react";
import dynamic from "next/dynamic";
import Nav from "./Nav";
import styles from "../styles/Home.module.css";

const MobileNav = dynamic(() => import("./MobileNav"));

const Home = (): ReactElement => {
  const [muted, setMuted] = useState(true);

  return (
    <>
      <video playsInline autoPlay muted={muted} loop>
        <source src="/teaser.mp4" type="video/mp4" />
      </video>
      <MobileNav />
      <Nav />
      {muted ? (
        <img
          src="/muted.svg"
          alt="Muted"
          className={styles.muteButton}
          onClick={() => setMuted(false)}
        />
      ) : (
        <img
          src="/unmuted.svg"
          alt="Unmuted"
          className={styles.muteButton}
          onClick={() => setMuted(true)}
        />
      )}
      <div className="copyright">© {new Date().getFullYear()} Body Meat</div>
    </>
  );
};

export default Home;
