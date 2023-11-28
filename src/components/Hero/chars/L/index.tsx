import { css, Global } from "@emotion/react";
import { useMemo } from "react";
import { HeroCharProps } from "../../Char";

import styles from "./L.module.scss";
import classNames from "classnames";

interface LExtraProps {
  active: boolean;
}

const GlobalStyles = () => css`
  .heroChar {
    animation-name: ${styles.reappear}, ${styles.revert}!important;
    animation-duration: 4s, 1s!important;
    animation-timing-function: ease-in-out!important;
    animation-delay: 5s, 9s!important;
    animation-fill-mode: forwards!important;
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
