import { useEffect } from "react";
import { HeroCharProps } from "../../Char";
import styles from "./L.module.scss";

interface LExtraProps {
  active: boolean;
  heroRef: React.RefObject<HTMLDivElement>;
}

const images = ["lua1.jpg", "lua2.webp", "lua3.png", "lua4.png", "lua5.png"];
const audios = ["lua1.ogg", "lua2.ogg", "lua3.ogg"];

const chooseRandom = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

const LExtra: React.FC<LExtraProps> = ({ active, heroRef }) => {
  useEffect(() => {
    if (!active) return;

    const meow = new Audio(`/lua/${chooseRandom(audios)}`);
    meow.play();

    const hero = heroRef.current ?? document.documentElement;

    const el = document.createElement('img');
    el.src = `/lua/${chooseRandom(images)}`;
    el.className = styles.lua;
    const halfSize = el.clientWidth / 2;
    el.style.bottom = `${Math.random() * hero.clientHeight / 3 - halfSize}px`;
    el.style.left = `${Math.random() * hero.clientWidth - halfSize}px`;
    
    hero.appendChild(el);

    setTimeout(() => {
      el.remove();
    }, 5000);
  }, [active]);

  return null;
};

const LOptions: HeroCharProps["options"] = (active, { hero }) => ({
  extraRender: <LExtra active={active} heroRef={hero} />,
  timeout: 1,
});

export default LOptions;
