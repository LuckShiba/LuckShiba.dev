import { RefObject, useCallback, useEffect, useMemo, useRef } from "react";

export const useCanvasDraw = (ref: RefObject<HTMLCanvasElement>) => {
  const canvas = ref.current;
  const lastX = useRef(0);
  const lastY = useRef(0);
  const isDrawing = useRef(false);

  const ctx = useMemo(() => {
    return canvas?.getContext("2d");
  }, [canvas]);

  const draw = useCallback(
    (x: number, y: number) => {
      if (!ctx || !canvas || !isDrawing.current) return;

      const { left, top } = canvas.getBoundingClientRect();

      const mouseX = x - left;
      const mouseY = y - top;

      ctx.beginPath();
      ctx.strokeStyle = "currentColor";
      ctx.moveTo(lastX.current, lastY.current);
      ctx.lineTo(mouseX, mouseY);
      ctx.lineWidth = document.body.clientWidth / 250;
      ctx.lineJoin = ctx.lineCap = "round";
      ctx.stroke();

      lastX.current = mouseX;
      lastY.current = mouseY;
    },
    [ctx, canvas]
  );

  const startDrawing = useCallback(
    (x: number, y: number) => {
      if (!ctx || !canvas) return;

      const { left, top } = canvas.getBoundingClientRect();

      lastX.current = x - left;
      lastY.current = y - top;

      isDrawing.current = true;

      draw(x, y);
    },
    [ctx, canvas, draw]
  );

  const stopDrawing = () => {
    isDrawing.current = false;
  };

  const clear = useCallback(() => {
    if (!ctx || !canvas) return;

    const { width, height } = canvas;

    ctx.clearRect(0, 0, width, height);
  }, [ctx, canvas]);

  return {
    startDrawing,
    stopDrawing,
    draw,
    clear,
  };
};

export const useAutoCanvasResize = (
  ref: RefObject<HTMLCanvasElement>,
  el: HTMLElement | null
) => {
  const canvas = ref.current;

  const resize = useCallback(() => {
    if (!canvas) return;

    const { width, height } = canvas.getBoundingClientRect();

    canvas.width = width;
    canvas.height = height;
  }, [canvas]);

  useEffect(() => {
    if (!el) return;

    resize();

    const resizeObserver = new ResizeObserver(resize);

    resizeObserver.observe(el);

    return () => {
      resizeObserver.disconnect();
    };
  }, [el, resize]);
};
