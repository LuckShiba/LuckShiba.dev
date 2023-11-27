import { css, Global } from "@emotion/react";
import { useMemo } from "react";
import { HeroCharProps } from "../../Char";

import styles from "./L.module.scss";
import classNames from "classnames";

interface LExtraProps {
  active: boolean;
}

const GlobalStyles = () => css`
  .heroChar:not(.${styles.l}) {
    animation-name: ${styles.reappear}, ${styles.revert};
    animation-duration: 4s, 1s;
    animation-timing-function: ease-in-out;
    animation-delay: 5s, 9s;
    animation-fill-mode: forwards;
  }
`;
const LExtra: React.FC<LExtraProps> = ({ active }) => {
  const styles = useMemo(() => (active ? GlobalStyles() : undefined), [active]);

  if (!active) return null;

  return <Global styles={styles} />;
};

const LOptions: HeroCharProps["options"] = (active) => ({
  extraRender: <LExtra active={active} />,
  className: classNames(styles.l, { [styles.active]: active }),
  disableJump: active,
  timeout: 11000,
});

export default LOptions;
