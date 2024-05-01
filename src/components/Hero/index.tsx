import { useSequentialAnimation } from "@/hooks/animation";
import HeroChar, { HeroCharProps } from "./Char";
import { useRef } from "react";
import classNames from "classnames";
import { useAutoCanvasResize } from "@/hooks/canvas";

import LOptions from "./chars/L";
import KOptions from "./chars/K";
import HOptions from "./chars/H";
import IOptions from "./chars/I";
import BOptions from "./chars/B";
import AOptions from "./chars/A";

import styles from "./Hero.module.scss";

const TEXT = "LuckShiba";

const ACTIONS: Array<HeroCharProps["options"] | undefined> = [
  LOptions,
  undefined, // u
  undefined, // c
  KOptions,
  undefined, // S
  HOptions,
  IOptions,
  BOptions,
  AOptions,
];

const Hero: React.FC = () => {
  const current = useSequentialAnimation(TEXT.length, 100, 2000);

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
