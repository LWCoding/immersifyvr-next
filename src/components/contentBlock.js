import styles from "./contentBlock.module.css";
import Spacer from "./spacer";

export default function ContentBlock(props) {
  return (
    <div className={styles.contentBlock}>
      <h1>{props.titleText}</h1>
      <hr />
      <Spacer size="small" />
      <div className={styles.spacerSmall}></div>
      {props.children}
    </div>
  );
}
