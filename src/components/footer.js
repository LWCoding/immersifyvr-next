import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerColumn}>
          <h3>Contact</h3>
          <p>
            Email:{" "}
            <a href="mailto:immersify.vr1@gmail.com">immersify.vr1@gmail.com</a>
          </p>
          <p>
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/company/immersifyvr/">
              ImmersifyVR Team
            </a>
          </p>
        </div>
        <div className={styles.footerColumn}>
          <h3>Menu</h3>
          <ul>
            <li>
              <a target="_blank" href="/">
                Home
              </a>
            </li>
            <li>
              <a target="_blank" href="/product">
                Product
              </a>
            </li>
            <li>
              <a target="_blank" href="/services">
                Services
              </a>
            </li>
            <li>
              <a target="_blank" href="/our-team">
                Our Team
              </a>
            </li>
            <li>
              <a target="_blank" href="/contact">
                Contact
              </a>
            </li>
            <li>
              <a target="_blank" href="/quote">
                Get a Quote
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h3>Follow us on</h3>
          <ul>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/immersifyvr/"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2035 by ImmersifyVR.</p>
      </div>
    </footer>
  );
}
