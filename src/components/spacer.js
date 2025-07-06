import styles from "./spacer.module.css";

/*
Spacer component for adding vertical space.

Example Usage: <Spacer size="small" />

Sizes:
- small
- medium
- large
*/
export default function Spacer({ size }) {
  return <div className={styles[size]}></div>;
}
