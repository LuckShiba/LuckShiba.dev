import classNames from "classnames";
import { useEffect, useMemo, useState } from "react";
import styles from "./HeroChar.module.scss";

export interface Refs {
  canvas: React.RefObject<HTMLCanvasElement>;
  hero: React.RefObject<HTMLDivElement>;
}

export interface HeroCharProps extends React.PropsWithChildren {
  jump?: boolean;
  options?: (
    active: boolean,
    refs: Refs
  ) => {
    className?: string;
    style?: React.CSSProperties;
    extraRender?: React.ReactElement;
    timeout?: number;
    disableJump?: boolean;
  };
  refs: Refs;
}

const HeroChar: React.FC<HeroCharProps> = ({
  children,
  jump,
  options,
  refs,
}) => {
  const [active, setActive] = useState(false);
  const [clickAnimation, setClickAnimation] = useState(false);

  const activeOptions = useMemo(
    () => options?.(active, refs),
    [active, options, refs]
  );

  useEffect(() => {
    if (active && activeOptions?.timeout) {
      const timeout = setTimeout(() => {
        setActive(false);
      }, activeOptions.timeout);

      return () => clearTimeout(timeout);
    }
  }, [active, activeOptions?.timeout]);

  useEffect(() => {
    if (active) {
      setClickAnimation(true);

      const timeout = setTimeout(() => {
        setClickAnimation(false);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [active]);

  const handleClick = () => {
    setActive((x) => {
      return !x;
    });
  };

  return (
    <span
      className={classNames(
        styles.heroChar,
        activeOptions?.className,
        "heroChar",
        {
          [styles.jump]:
            jump || (clickAnimation && !activeOptions?.disableJump),
          [styles.active]: active,
        }
      )}
      onClick={handleClick}
      style={activeOptions?.style}
    >
      {children}
      {activeOptions?.extraRender}
    </span>
  );
};

export default HeroChar;
