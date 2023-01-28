import classNames from "classnames";
import { MouseEvent, useEffect, useMemo, useState } from "react";
import styles from "./HeroChar.module.scss";

export interface HeroCharProps extends React.PropsWithChildren {
  jump?: boolean;
  options?: (active: boolean) => {
    className?: string;
    style?: React.CSSProperties;
    extraRender?: () => React.ReactNode;
    timeout?: number;
  };
}

const HeroChar: React.FC<HeroCharProps> = ({ children, jump, options }) => {
  const [active, setActive] = useState(false);

  const activeOptions = useMemo(() => options?.(active), [active, options]);
  useEffect(() => {
    if (active && activeOptions?.timeout) {
      const timeout = setTimeout(() => {
        setActive(false);
      }, activeOptions.timeout);

      return () => clearTimeout(timeout);
    }
  }, [active, activeOptions?.timeout]);

  const handleClick = (event: MouseEvent<HTMLSpanElement>) => {
    setActive((x) => {
      if (!x && event.target instanceof HTMLElement) {
        event.target.style.animation = "none";
        event.target.offsetHeight; // trigger reflow
        event.target.style.animation = "";
      }

      return !x;
    });
  };

  return (
    <span
      className={classNames(styles.heroChar, activeOptions?.className, {
        [styles.jump]: jump,
        [styles.active]: active,
      })}
      onClick={handleClick}
      style={activeOptions?.style}
    >
      {children}
      {activeOptions?.extraRender?.()}
    </span>
  );
};

export default HeroChar;
