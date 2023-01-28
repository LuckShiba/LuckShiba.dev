import { css, Global } from "@emotion/react";
import classNames from "classnames";
import { HeroCharProps } from "../../Char";

import styles from "./I.module.scss";

const Styles = (active: boolean) => css`
  body {
    transition: filter 0.5s ease-in-out;
    ${active && "filter: invert(1);"}
  }
`;

interface IExtraProps {
  active: boolean;
}

const IExtra: React.FC<IExtraProps> = ({ active }) => {
  return <Global styles={Styles(active)} />;
};

const IOptions: HeroCharProps["options"] = (active) => ({
  extraRender: <IExtra active={active} />,
  timeout: 5000,
  disableJump: active,
  className: classNames(styles.i, { [styles.active]: active }),
});

export default IOptions;
