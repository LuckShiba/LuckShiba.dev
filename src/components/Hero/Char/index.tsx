import styles from "./HeroChar.module.scss";

export type HeroCharProps = React.PropsWithChildren;

const HeroChar: React.FC<HeroCharProps> = ({ children }) => {
  return <span className={styles.heroChar}>{children}</span>;
};

export default HeroChar;
