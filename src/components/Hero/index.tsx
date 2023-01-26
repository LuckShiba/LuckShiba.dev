import HeroChar from "./Char";
import styles from "./Hero.module.scss";

const Hero: React.FC = () => {
  return (
    <div className={styles.hero}>
      {[..."LuckShiba"].map((char) => (
        <HeroChar>{char}</HeroChar>
      ))}
    </div>
  );
};

export default Hero;
