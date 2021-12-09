import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

export interface NavProps {
  disableHome?: boolean;
  className?: string;
}

export default function Nav(props: NavProps) {
  const getLinkClasses = ({ isActive }: { isActive: boolean }) => {
    return `${styles.link} ${isActive ? styles.linkActive : ""}`;
  };

  return (
    <nav className={props.className}>
      {!props.disableHome && (
        <div className={styles.linkContainer}>
          <NavLink className={getLinkClasses} to="/">
            Home
          </NavLink>
        </div>
      )}
      <div className={styles.linkContainer}>
        <NavLink className={getLinkClasses} to="/projects">
          Projects
        </NavLink>
      </div>
      <div className={styles.linkContainer}>
        <NavLink className={getLinkClasses} to="/about">
          About
        </NavLink>
      </div>
    </nav>
  );
}
