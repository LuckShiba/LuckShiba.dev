import { useSequentialAnimation } from "@/hooks/animation";
import HeroChar, { HeroCharProps } from "./Char";
import IOptions from "./chars/I";
import BOptions from "./chars/B";

import styles from "./Hero.module.scss";

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
