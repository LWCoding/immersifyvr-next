import styles from "./squishToMiddle.module.css";

/*
Squish to middle component to make sure all contents are moved to center.
*/
export default function SquishToMiddle(props) {
  return <div className={styles.squishToMiddle}>{props.children}</div>;
}
