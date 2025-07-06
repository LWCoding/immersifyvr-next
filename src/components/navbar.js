import Image from "next/image";
import styles from "./navbar.module.css";

import QuoteButton from "./quoteButton";

export default function Header() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src="/img/logo.avif"
          width={80}
          height={80}
          alt="ImmersifyVR Logo"
        />
        <div className={styles.brandText}>
          <h1>ImmersifyVR</h1>
          <p>Virtual Reality for Seniors</p>
        </div>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <a href="/" className={styles.active}>
            Home
          </a>
        </li>
        <li>
          <a href="/product">Product</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/our-team">Our Team</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <QuoteButton />
        </li>
      </ul>
    </nav>
  );
}
