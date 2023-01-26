import classNames from "classnames";
import styles from "./HeroChar.module.scss";

export interface HeroCharProps extends React.PropsWithChildren {
  jump?: boolean;
}

const HeroChar: React.FC<HeroCharProps> = ({ children, jump }) => {
  return (
    <span
      className={classNames(styles.heroChar, {
        [styles.jump]: jump,
      })}
      tabIndex={0}
    >
      {children}
    </span>
  );
};

export default HeroChar;
