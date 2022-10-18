import styles from "./HomeLayout.module.css";

export function HomeLayout({ children }) {
  return <div className={styles["home-layout"]}>{children}</div>;
}
