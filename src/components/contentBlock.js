import styles from "./contentBlock.module.css";
import Spacer from "./spacer";

export default function ContentBlock({
	titleText,
	children,
	showDivider = false,
	headerSpacerSize = "small",
}) {
	return (
		<div className={styles.contentBlock}>
			{titleText ? (
				<>
					<h1 className={styles.titleText}>{titleText}</h1>
					{showDivider ? <hr className={styles.divider} /> : null}
					{headerSpacerSize ? <Spacer size={headerSpacerSize} /> : null}
				</>
			) : null}
			{children}
		</div>
	);
}
