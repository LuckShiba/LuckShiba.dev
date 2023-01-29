import { useSequentialAnimation } from "@/hooks/animation";
import HeroChar, { HeroCharProps } from "./Char";
import { useRef } from "react";
import classNames from "classnames";

import IOptions from "./chars/I";
import BOptions from "./chars/B";
import AOptions from "./chars/A";

import styles from "./Hero.module.scss";
import { useAutoCanvasResize } from "@/hooks/canvas";

const TEXT = "LuckShiba";

const ACTIONS: Array<HeroCharProps["options"] | undefined> = [
  undefined, // L
  undefined, // u
  undefined, // c
  undefined, // k
  undefined, // S
  undefined, // h
  IOptions,
  BOptions,
  AOptions,
];

const Hero: React.FC = () => {
  const current = useSequentialAnimation(TEXT.length, 100);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useAutoCanvasResize(canvasRef, heroRef.current);

  return (
    <div className={classNames(styles.hero, "hero")} ref={heroRef}>
      <canvas className={styles.canvas} ref={canvasRef} />
      <div className={styles.chars}>
        {[..."LuckShiba"].map((char, i) => (
          <HeroChar
            key={char}
            jump={current >= i}
            options={ACTIONS[i]}
            refs={{
              canvas: canvasRef,
              hero: heroRef,
            }}
          >
            {char}
          </HeroChar>
        ))}
      </div>
    </div>
  );
};

export default Hero;
