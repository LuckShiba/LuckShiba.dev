import { useSequentialAnimation } from "@/hooks/animation";
import HeroChar, { HeroCharProps } from "./Char";
import { useCallback, useRef } from "react";
import classNames from "classnames";
import { useAutoCanvasResize } from "@/hooks/canvas";

import LOptions from "./chars/L";
import COptions from "./chars/C";
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
  COptions, // c
  KOptions,
  undefined, // S
  HOptions,
  IOptions,
  BOptions,
  AOptions,
];

const history: string[] = [];

const Hero: React.FC = () => {
  const current = useSequentialAnimation(TEXT.length, 100, 2000);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useAutoCanvasResize(canvasRef, heroRef.current);
  const onClick = useCallback((char: string) => {
    history.push(char);
    
    if (history.length > 3) {
      history.shift();
    }

    const text = "Lua";

    if (history.join("") === text) {
      const chars = document.querySelectorAll(`.heroChar:not(.heroChar-L):not(.heroChar-u):not(.heroChar-a)`) as NodeListOf<HTMLDivElement>;
      
      for (const char of chars) {
        char.classList.toggle(styles.hide);
      }

      const l = document.querySelector(".heroChar-L") as HTMLDivElement;
      for (let i = 0; i < 40; i++) {
        setTimeout(() => {
          l.click();
        }, i * 100);
      }

    }
  }, []);

  return (
    <div className={classNames(styles.hero, "hero")} ref={heroRef}>
      <canvas className={styles.canvas} ref={canvasRef} />
      <div className={classNames(styles.chars, 'chars')}>
        {[..."LuckShiba"].map((char, i) => (
          <HeroChar
            key={char}
            char={char}
            jump={current >= i}
            options={ACTIONS[i]}
            refs={{
              canvas: canvasRef,
              hero: heroRef,
            }}
            onClick={() => onClick(char)}
          >
            {char}
          </HeroChar>
        ))}
      </div>
    </div>
  );
};

export default Hero;
