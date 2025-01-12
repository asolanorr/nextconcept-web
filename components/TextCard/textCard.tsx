'use client';
import styles from '@/components/TextCard/textCard.module.css';
import { motion } from 'motion/react';

interface TextCardProps {
  title: string;
  description: string;
  animationDelay: number;
}

export default function TextCard({
  title,
  description,
  animationDelay,
}: TextCardProps) {
  return (
    <motion.div
      className={styles.textCard}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        delay: animationDelay,
        duration: 0.5,
        scale: { type: 'spring', visualDuration: 0.5, bounce: 0.2 },
      }}
    >
      <h2 className={styles.textCardTitle}>{title}</h2>
      <p className={styles.textCardDescription}>{description}</p>
    </motion.div>
  );
}
