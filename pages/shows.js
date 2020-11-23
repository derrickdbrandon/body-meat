import Head from "next/head";
import styles from "../styles/Shows.module.css";
import MobileNav from "./mobileNav";
import Nav from "./nav";

export default function Shows() {
  return (
    <>
      <Head>
        <title>Body Meat</title>
        <meta name="Body Meat" content="Body Meat Shows" />
        <meta name="Description" content="Body Meat Shows Page"></meta>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className={styles.container}>
        <Nav />
        <MobileNav />
        <div className={styles.showsList}>No Shows Scheduled</div>
      </div>
    </>
  );
}
