import Nav from "../components/Nav";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <span className={styles.title}>LuckShiba</span>
      <Nav disableHome />
    </div>
  );
}
