
import { useEffect, useMemo, useState } from "react";
import { HeroCharProps } from "../../Char";
import styles from "./L.module.scss";

interface LExtraProps {
  active: boolean;
}

const images = ["lua1.jpg", "lua2.webp", "lua3.png", "lua4.png", "lua5.png"];
const audios = ["lua1.ogg", "lua2.ogg", "lua3.ogg"];

const chooseRandom = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];
const getRandomScreenPosition = () => ({
  x: Math.random() * (document.querySelector('.hero .chars')?.clientWidth ?? window.innerWidth) - 100,
  y: Math.random() * window.innerHeight / 3,
});

interface Cat {
  image: string;
  position: { x: number; y: number };
}

const LExtra: React.FC<LExtraProps> = ({ active }) => {
  const [cats, setCats] = useState<Cat[]>([]);

  useEffect(() => {
    if (!active) return;

    const meow = new Audio(`/lua/${chooseRandom(audios)}`);
    meow.play();

    setCats((cats) => [...cats, {
      image: chooseRandom(images),
      position: getRandomScreenPosition(),
    }]);

    const timeout = setTimeout(() => {
      setCats((cats) => cats.slice(1));
    }, 5000);

    return () => clearTimeout(timeout);
  }, [active]);

  return (
    <>
      {cats.map((cat, i) => (
        <img 
          key={i}
          src={`/lua/${cat.image}`}
          alt="cat"
          className={styles.lua}
          style={{
            top: cat.position.y,
            left: cat.position.x,        
          }}
        />
      ))}
    </>
  );
};

const LOptions: HeroCharProps["options"] = (active) => ({
  extraRender: <LExtra active={active} />,
  disableJump: false,
  timeout: 1,
});

export default LOptions;
