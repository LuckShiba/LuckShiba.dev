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


const Hero: React.FC = () => {
  const current = useSequentialAnimation(TEXT.length, 100, 2000);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const history = useRef<string[]>([]);
  const style = useRef<HTMLStyleElement>(null);

  useAutoCanvasResize(canvasRef, heroRef.current);
  const onClick = useCallback((char: string) => {
    history.current?.push(char);
    
    if (history.current?.length > 3) {
      history.current?.shift();
    }

    const text = "Lua";
    console.log(style.current);

    if (history.current?.join("") === text) {
      if (style.current) {
        style.current.remove();
        style.current = null;
      } else {
        const styleEl = document.createElement("style");
        styleEl.innerHTML = `
          .heroChar:not(.heroChar-L):not(.heroChar-u):not(.heroChar-a) {
            font-size: 0;
          }
        `;
        document.head.appendChild(styleEl);
        style.current = styleEl;
      }

      const l = document.querySelector(".heroChar-L") as HTMLDivElement;
      for (let i = 0; i < 30; i++) {
        setTimeout(() => {
          l.click();
        }, i * 150);
      }
    }
  }, [style, history]);

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
