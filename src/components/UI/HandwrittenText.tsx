import React, { useEffect, useRef, useState } from "react";

// ! ----------------------------------------------------------------------------------------------

interface HandwrittenTextProps {
  svgPathData: string;
  initialViewBox?: string;
  strokeWidth?: number;
  drawDurationSec?: number;
  eraseDurationSec?: number;
  viewBoxPadding?: number;
  className?: string;
}

// ! ----------------------------------------------------------------------------------------------

const HandwrittenText: React.FC<HandwrittenTextProps> = ({
  svgPathData,
  initialViewBox = "0 0 100 30",
  strokeWidth = 1,
  drawDurationSec = 3,
  pauseDurationSec = 3,
  eraseDurationSec = 3,
  blankDurationSec = 3,
  viewBoxPadding = 1,
  className,
}) => {
  const pathRef = useRef<SVGPathElement>(null);
  const [calculatedViewBox, setCalculatedViewBox] = useState<string | null>(null);
  const [isViewBoxReady, setIsViewBoxReady] = useState(false);
  
  // ! ----------------------------------------------------------------------------------------------

  useEffect(() => {
    setIsViewBoxReady(false);
    setCalculatedViewBox(null);

    const currentPath = pathRef.current;
    if (currentPath && svgPathData) {
      try {
        const bbox = currentPath.getBBox();

        if (bbox.width > 0 || bbox.height > 0) {
          const vbX = bbox.x - viewBoxPadding;
          const vbY = bbox.y - viewBoxPadding;
          const vbWidth = bbox.width + 2 * viewBoxPadding;
          const vbHeight = bbox.height + 2 * viewBoxPadding;
          setCalculatedViewBox(`${vbX} ${vbY} ${vbWidth} ${vbHeight}`);
        } else {
          setCalculatedViewBox(initialViewBox);
        }
      } catch (error) {
        console.error("Error calculating SVG BBox:", error);
        setCalculatedViewBox(initialViewBox);
      } finally {
        setIsViewBoxReady(true);
      }
    } else {
      setCalculatedViewBox(initialViewBox);
      setIsViewBoxReady(true);
    }
  }, [svgPathData, viewBoxPadding, initialViewBox]);

  // ! ----------------------------------------------------------------------------------------------

  useEffect(() => {
    const currentPath = pathRef.current;
    if (!isViewBoxReady || !calculatedViewBox) return;
    if (!currentPath || !svgPathData) return;

    const length = currentPath.getTotalLength();
    if (length === 0) {
      currentPath.style.strokeDasharray = "none";
      currentPath.style.strokeDashoffset = "none";
      return;
    }

    let isMounted = true;
    let animationTimeoutId: NodeJS.Timeout | undefined;

    const delay = (ms: number): Promise<void> =>
      new Promise((resolve) => {
        if (isMounted) {
          animationTimeoutId = setTimeout(resolve, ms);
        }
      });

    const animateDrawAndErase = async () => {
      while (isMounted && currentPath) {
        // 1. Reset: Start blank
        if (!isMounted || !currentPath) return;
        currentPath.style.transition = "stroke-dashoffset";
        currentPath.style.strokeDasharray = `${length}`;
        currentPath.style.strokeDashoffset = `${length}`;
        currentPath.getBoundingClientRect();

        // 2. Follow path and complete border
        currentPath.style.transition = `stroke-dashoffset ${drawDurationSec*1000*10}ms`;
        currentPath.style.strokeDashoffset = "0";
        await delay(drawDurationSec * 1000);
        await delay(pauseDurationSec * 1000);

        // 3. Erase the border backwards
        if (!isMounted || !currentPath) return;
        currentPath.style.transition = `stroke-dashoffset ${eraseDurationSec*1000*10}ms`;
        currentPath.style.strokeDashoffset = `${length}`;
        await delay(eraseDurationSec * 1000);
        await delay(blankDurationSec * 1000);
      }
    };

    animateDrawAndErase();

    return () => {
      isMounted = false;
      if (animationTimeoutId) {
        clearTimeout(animationTimeoutId);
      }
      if (currentPath) {
        currentPath.style.transition = "none";
      }
    };
  }, [
    isViewBoxReady,
    calculatedViewBox,
    svgPathData,
    strokeWidth,
    drawDurationSec,
    pauseDurationSec,
    eraseDurationSec,
    blankDurationSec,
  ]);

  // ! ----------------------------------------------------------------------------------------------

  return (
    <svg
      viewBox={calculatedViewBox || initialViewBox}
      className="handwriting-svg w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        ref={pathRef}
        d={svgPathData || "M0,0"}
        stroke="var(--regular)"
        fill="var(--background)"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export default HandwrittenText;

// ! ----------------------------------------------------------------------------------------------
