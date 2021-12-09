import Nav from "./Nav";
import styles from "./BarLayout.module.css";
import { Outlet } from "react-router";

export default function BarLayout() {
  return (
    <>
      <Nav className={styles.bar} />
      <main className={styles.content}>
        <Outlet />
      </main>
    </>
  );
}
