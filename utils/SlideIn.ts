
type TMotion = {
    direction: "up" | "down" | "left" | "right" | "";
    type: "tween" | "spring" | "just" | "";
    delay: number;
    duration: number;
  };
  
export const slideIn = (
    direction: TMotion["direction"],
    type: TMotion["type"],
    delay: TMotion["delay"],
    duration: TMotion["duration"]
  ) => {
    return {
      hidden: {
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
        y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
      },
      show: {
        x: 0,
        y: 0,
        transition: {
          type,
          delay,
          duration,
          ease: "easeOut",
        },
      },
    };
  };