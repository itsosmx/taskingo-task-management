import React from "react";

export default function useHorizontalScroll() {
  const ref = React.useRef<any>();
  React.useEffect(() => {
    const element = ref.current;
    if (!element) return;
    function onWheel(e: WheelEvent) {
      if (e.deltaY === 0) return;
      e.preventDefault();
      element?.scrollTo({
        left: element.scrollLeft + e.deltaY * 2,
        behavior: "smooth",
      });
    }

    element.addEventListener("wheel", onWheel);
    return () => element.removeEventListener("wheel", onWheel);
  }, []);

  return ref;
}
