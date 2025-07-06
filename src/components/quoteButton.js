import styles from "./quoteButton.module.css";

export default function QuoteButton() {
  return (
    <a href="/quote" className={styles.quoteButton}>
      Get a Quote
    </a>
  );
}
