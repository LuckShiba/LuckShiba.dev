import classNames from "classnames";
import { HeroCharProps } from "../../Char";

import styles from "./B.module.scss";

interface BExtraProps {
  active: boolean;
}

const BExtra: React.FC<BExtraProps> = ({ active }) => {
  if (!active) return null;

  return <img src="/svgs/b.svg" alt="B" className={styles.image} />;
};

const BOptions: HeroCharProps["options"] = (active) => ({
  extraRender: <BExtra active={active} />,
  className: classNames({ [styles.b]: active }),
});

export default BOptions;
