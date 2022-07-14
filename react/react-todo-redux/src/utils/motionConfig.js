// route transitions
export const pageTransitionLeft = {
  hidden: {
    x: window.innerWidth * 2,
    opacity: 0
  },
  show: {
    type: "spring",
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4
    }
  }
};
export const pageTransitionRight = {
  hidden: {
    x: window.innerWidth * -2,
    opacity: 0
  },
  show: {
    type: "spring",
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4
    }
  }
};
export const pageTransitionUp = {
  hidden: {
    y: window.innerHeight * 2,
    opacity: 0
  },
  show: {
    type: "spring",
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4
    }
  }
};