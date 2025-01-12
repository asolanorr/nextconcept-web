'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';
import styles from './simpleHero.module.css';

interface SimpleHeroProps {
  title: string;
  description: string;
  image: ReactNode;
  flipContent: boolean;
}

export default function SimpleHero({
  title,
  description,
  image,
  flipContent,
}: SimpleHeroProps) {
  return (
    <div className={styles.infoContainer}>
      <div
        className={`${styles.infoContentContainer} ${flipContent ? styles.flippedContent : null}`}
      >
        <div
          className={`${styles.infoBox} ${flipContent ? styles.flippedContent : null}`}
        >
          <motion.div
            className={styles.textContainer}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              scale: { type: 'spring', bounce: 0.1 },
            }}
          >
            <h1>{title}</h1>
            <p>{description}</p>
          </motion.div>
          <motion.div
            className={styles.imageContainer}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, x: [50, 0] }}
            transition={{ duration: 1 }}
          >
            {image}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
