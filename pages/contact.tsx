import { ReactElement } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import styles from "../styles/Contact.module.css";

const Contact = (): ReactElement => {
  return (
    <>
      <div className={styles.container}>
        <Nav />
        <MobileNav displayHomeButton />
        <div className={styles.contactGrid}>
          <h3 className={styles.subheader}>MANAGEMENT</h3>
          <div className={styles.email}>imran@inreal.life</div>
          <h3 className={styles.subheader}>BOOKING</h3>
          <div className={styles.email}>john@groundcontroltouring.com</div>
        </div>
      </div>
      <div className="copyright">© {new Date().getFullYear()} Body Meat</div>
    </>
  );
};

export default Contact;
