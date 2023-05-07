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

    const mouseDown = (e: PointerEvent) => {
      startDrawing(e.clientX, e.clientY, e.pressure);
    };

    const mouseUp = () => {
      stopDrawing();
    };

    const mouseMove = (e: PointerEvent) => {
      draw(e.clientX, e.clientY, e.pressure);
      e;
    };

    const touchStart = (e: TouchEvent) => {
      const { clientX, clientY, force } = e.touches[0];
      startDrawing(clientX, clientY), force;
    };

    const touchEnd = () => {
      stopDrawing();
    };

    const touchMove = (e: TouchEvent) => {
      e.preventDefault();
      const { clientX, clientY, force } = e.touches[0];
      draw(clientX, clientY, force);
    };

    hero.addEventListener("pointerdown", mouseDown);
    hero.addEventListener("pointerup", mouseUp);
    hero.addEventListener("pointermove", mouseMove);

    hero.addEventListener("touchstart", touchStart);
    hero.addEventListener("touchend", touchEnd);
    hero.addEventListener("touchmove", touchMove);

    return () => {
      hero.removeEventListener("pointerdown", mouseDown);
      hero.removeEventListener("pointerup", mouseUp);
      hero.removeEventListener("pointermove", mouseMove);

      hero.removeEventListener("touchstart", touchStart);
      hero.removeEventListener("touchend", touchEnd);
      hero.removeEventListener("touchmove", touchMove);
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
