export const keyframes = {
  "accordion-down": {
    from: { height: "0" },
    to: { height: "var(--radix-accordion-content-height)" },
  },
  "accordion-up": {
    from: { height: "var(--radix-accordion-content-height)" },
    to: { height: "0" },
  },
  shimmer: {
    from: {
      backgroundPosition: "0 0",
    },
    to: {
      backgroundPosition: "-200% 0",
    },
  },
  moveHorizontal: {
    "0%": {
      transform: "translateX(-50%) translateY(-10%)",
    },
    "50%": {
      transform: "translateX(50%) translateY(10%)",
    },
    "100%": {
      transform: "translateX(-50%) translateY(-10%)",
    },
  },
  moveInCircle: {
    "0%": {
      transform: "rotate(0deg)",
    },
    "50%": {
      transform: "rotate(180deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
  moveVertical: {
    "0%": {
      transform: "translateY(-50%)",
    },
    "50%": {
      transform: "translateY(50%)",
    },
    "100%": {
      transform: "translateY(-50%)",
    },
  },
  scroll: {
    to: {
      transform: "translate(calc(-50% - 0.5rem))",
    },
  },
};
export const animation = {
  "accordion-down": "accordion-down 0.2s ease-out",
  "accordion-up": "accordion-up 0.2s ease-out",
  spotlight: "spotlight 2s ease .75s 1 forwards",
  shimmer: "shimmer 2s linear infinite",
  first: "moveVertical 30s ease infinite",
  second: "moveInCircle 20s reverse infinite",
  third: "moveInCircle 40s linear infinite",
  fourth: "moveHorizontal 40s ease infinite",
  fifth: "moveInCircle 20s ease infinite",
  scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
};
