import classNames from "classnames";
import { HeroCharProps } from "../../Char";

import styles from "./K.module.scss";

const KOptions: HeroCharProps["options"] = (active) => ({
  timeout: 3250,
  disableJump: active,
  className: classNames(styles.k, { [styles.active]: active }),
});

export default KOptions;
