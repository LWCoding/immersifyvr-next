import styles from "./sectionBand.module.css";

export default function SectionBand({ alt = false, children }) {
  return (
    <section className={`${styles.band} ${alt ? styles.alt : ""}`}>
      {children}
    </section>
  );
}

