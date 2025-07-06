import styles from "./imageHeader.module.css";

export default function ImageHeader({ title, backgroundImage }) {
  return (
    <div
      className={styles.hero}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.overlay}>
        <h1>{title}</h1>
      </div>
    </div>
  );
}
