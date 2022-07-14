// Mobile Menu
export const slideDrawer = {
  hidden: {
    x: -600,
    transition: {
      opacity: 0,
    },
  },
  show: {
    x: 0,
    transition: {
      type: "tween",
      duration: 0.5,
      opacity: 1,
    },
  },
  remove: {
    y: `100vh`,
    transition: {
      type: "spring",
      duration: 0.5,
      opacity: 0,
    },
  },
};

// Search From
export const slideSearch = {
  hidden: {
    x: 600,
    transition: {
      opacity: 0,
    },
  },
  show: {
    x: 0,
    transition: {
      type: "tween",
      duration: 0.5,
      opacity: 1,
    },
  },
  remove: {
    x: `100vh`,
    transition: {
      type: "spring",
      duration: 0.5,
      opacity: 0,
    },
  },
};
export const drawLine = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: (i) => {
    const delay = i * 0.25;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};
