import { useCanvasDraw } from "@/hooks/canvas";
import { css, Global } from "@emotion/react";
import { useEffect } from "react";
import { HeroCharProps, Refs } from "../../Char";

interface AExtraProps {
  active: boolean;
  refs: Refs;
}

const AExtra: React.FC<AExtraProps> = ({ active, refs }) => {
  const { draw, startDrawing, stopDrawing, clear } = useCanvasDraw(refs.canvas);

  useEffect(() => {
    if (!active) {
      clear();
      return;
    }
    const hero = refs.hero.current;

    if (!hero) {
      return;
    }

    const mouseDown = (e: MouseEvent) => {
      startDrawing(e.clientX, e.clientY);
    };

    const mouseUp = () => {
      stopDrawing();
    };

    const mouseMove = (e: MouseEvent) => {
      draw(e.clientX, e.clientY);
    };

    hero.addEventListener("mousedown", mouseDown);
    hero.addEventListener("mouseup", mouseUp);
    hero.addEventListener("mousemove", mouseMove);

    return () => {
      hero.removeEventListener("mousedown", mouseDown);
      hero.removeEventListener("mouseup", mouseUp);
      hero.removeEventListener("mousemove", mouseMove);
    };
  });

  if (!active) return null;

  const GlobalStyle = css`
    .hero {
      cursor: crosshair;
    }
  `;

  return <Global styles={GlobalStyle} />;
};

const AOptions: HeroCharProps["options"] = (active, refs) => ({
  extraRender: <AExtra active={active} refs={refs} />,
});

export default AOptions;
