import navStyles from "../styles/Home.module.css";
import styles from "../styles/Contact.module.css";
import Nav from "./nav";
import MobileNav from "./mobileNav";
import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Body Meat</title>
        <meta name="Body Meat" content="Body Meat Contact" />
        <meta name="Description" content="Body Meat Contact Page"></meta>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className={styles.container}>
        <Nav />
        <MobileNav />
        <div className={styles.contactGrid}>
          <h3 className={styles.subheader}>MANAGEMENT</h3>
          <div className={styles.email}>imran@inreal.life</div>
          <h3 className={styles.subheader}>BOOKING</h3>
          <div className={styles.email}>john@groundcontroltouring.com</div>
        </div>
      </div>
    </>
  );
}