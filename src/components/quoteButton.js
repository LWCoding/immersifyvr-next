import Link from "next/link";
import styles from "./quoteButton.module.css";

export default function QuoteButton() {
	return (
		<Link href="/quote" className={styles.quoteButton}>
			Get a Quote
		</Link>
	);
}
