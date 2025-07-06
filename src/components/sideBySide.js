import styles from "./sideBySide.module.css";

/*
SideBySide component for displaying content side by side.

Expects two children elements. Will distribute them evenly across horizontal.
*/
export default function SideBySide(props) {
  return <div className={styles.sideBySide}>{props.children}</div>;
}
