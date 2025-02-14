import classNames from "classnames";
import { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./HeroChar.module.scss";

export interface Refs {
  canvas: React.RefObject<HTMLCanvasElement>;
  hero: React.RefObject<HTMLDivElement>;
}

export interface HeroCharProps extends React.PropsWithChildren {
  jump?: boolean;
  char: string;
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
  onClick?: () => void;
}

const HeroChar: React.FC<HeroCharProps> = ({
  children,
  jump,
  options,
  refs,
  char,
  onClick
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

  const handleClick = useCallback(() => {
    setActive(x => !x);

    onClick?.();
  }, [onClick]);

  return (
    <span
      className={classNames(
        styles.heroChar,
        activeOptions?.className,
        "heroChar",
        `heroChar-${char}`,
        {
          [styles.jump]:
            jump || (clickAnimation && !activeOptions?.disableJump),
          [styles.initialJump]: jump,
          [styles.active]: active,
        }
      )}
      onClick={handleClick}
      style={activeOptions?.style}
    >
      <span className="heroCharText">{children}</span>
      {activeOptions?.extraRender}
    </span>
  );
};

export default HeroChar;
