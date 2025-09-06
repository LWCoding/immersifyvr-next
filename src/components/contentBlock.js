import styles from "./contentBlock.module.css";
import Spacer from "./spacer";

export default function ContentBlock({ titleText, children }) {
	return (
		<div className={styles.contentBlock}>
			{titleText ? (
				<>
					<h1 className={styles.titleText}>{titleText}</h1>
					<hr />
					<Spacer size="small" />
				</>
			) : null}
			{children}
		</div>
	);
}
