import styles from '@/components/HeroSection/_components/CursorBlinker/cursorBlinker.module.css';
import { motion } from 'motion/react';

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: 'linear',
      times: [0, 0.5, 0.5, 1],
    },
  },
};

export default function CursorBlinker() {
  return (
    <motion.div
      variants={cursorVariants}
      animate="blinking"
      className={styles.cursorBlinker}
    />
  );
}
