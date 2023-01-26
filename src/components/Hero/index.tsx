import { useSequentialAnimation } from "@/hooks/animation";
import HeroChar from "./Char";
import styles from "./Hero.module.scss";

const TEXT = "LuckShiba";

const Hero: React.FC = () => {
  const current = useSequentialAnimation(TEXT.length, 80);

  return (
    <div className={styles.hero}>
      <div>
        {[..."LuckShiba"].map((char, i) => (
          <HeroChar key={char} jump={current >= i}>
            {char}
          </HeroChar>
        ))}
      </div>
    </div>
  );
};

export default Hero;
