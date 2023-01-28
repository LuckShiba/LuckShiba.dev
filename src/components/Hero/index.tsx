import { useSequentialAnimation } from "@/hooks/animation";
import { css, Global } from "@emotion/react";
import classNames from "classnames";
import HeroChar, { HeroCharProps } from "./Char";
import styles from "./Hero.module.scss";

const TEXT = "LuckShiba";

const ACTIONS: Array<HeroCharProps["options"] | undefined> = [
  undefined, // L
  undefined, // u
  undefined, // c
  (active) => ({
    extraRender: () => {
      return (
        <div
          className={classNames(styles.kRect, {
            [styles.kRectActive]: active,
          })}
        />
      );
    },
    className: styles.k,
  }), // k
  undefined, // S
  undefined, // h
  (active) => ({
    extraRender: () => {
      const Styles = css`
        body {
          transition: filter 0.5s ease-in-out;
          ${active && "filter: invert(1);"}
        }
      `;

      return <Global styles={Styles} />;
    },
    timeout: 5000,
    className: classNames(styles.i, { [styles.iActive]: active }),
    disableJump: active,
  }), // i
  (active) => ({
    extraRender: () => {
      if (!active) return null;

      return <img src="/svgs/b.svg" alt="B" className={styles.bImage} />;
    },
    className: classNames({ [styles.b]: active }),
  }), // b
  undefined, // a
];

const Hero: React.FC = () => {
  const current = useSequentialAnimation(TEXT.length, 100);

  return (
    <div className={styles.hero}>
      <div>
        {[..."LuckShiba"].map((char, i) => (
          <HeroChar key={char} jump={current >= i} options={ACTIONS[i]}>
            {char}
          </HeroChar>
        ))}
      </div>
    </div>
  );
};

export default Hero;
