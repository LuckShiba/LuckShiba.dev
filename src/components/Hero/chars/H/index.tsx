import { css, Global } from "@emotion/react";
import { useMemo } from "react";
import { HeroCharProps } from "../../Char";

import styles from "./H.module.scss";

interface HExtraProps {
  active: boolean;
}

const GlobalStyles = () => css`
  ${Array(9)
    .fill(0)
    .map(
      (_, i) => `
      .heroChar:nth-of-type(${i + 1}) {
        animation: ${styles.shake} ${
        Math.random() * 400 + 200
      }ms ease-in-out infinite;

      }
    `
    )
    .join("")}
`;

const HExtra: React.FC<HExtraProps> = ({ active }) => {
  const styles = useMemo(() => (active ? GlobalStyles() : undefined), [active]);

  if (!active) return null;

  return <Global styles={styles} />;
};

const HOptions: HeroCharProps["options"] = (active) => ({
  extraRender: <HExtra active={active} />,
});

export default HOptions;
