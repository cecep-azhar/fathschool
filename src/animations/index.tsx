const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      staggerChildren: 0.3,
      delayChildren: 0.7,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

export const AnimationList = { listVariants, itemVariants };

export const FadeInDown = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0,
    transition: { type: "spring", stiffness: 100, delay: 0.7 },
  },
};
