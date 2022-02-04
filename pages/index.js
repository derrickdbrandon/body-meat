import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import Nav from "./nav";
import dynamic from "next/dynamic";

const MobileNav = dynamic(() => import("./mobileNav"));

export default function Home() {
  const [muted, setMuted] = useState(true);

  return (
    <>
      <Head>
        <title>BODY MEAT</title>
        <meta name="Body Meat" content="Body Meat" />
        <meta name="Description" content="Body Meat Home Page"></meta>
        <link rel="icon" href="/logo.png" />
      </Head>
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
      <div className={styles.copyright}>© {new Date().getFullYear()} Body Meat</div>
    </>
  );
}
