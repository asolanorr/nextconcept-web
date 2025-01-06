'use client';
import { motion } from 'motion/react';
import { ReactNode } from 'react';
import styles from './serviceCard.module.css';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  animationDelay: number;
}

export default function ServiceCard({
  icon,
  title,
  description,
  animationDelay,
}: ServiceCardProps) {
  return (
    <motion.div
      className={styles.serviceCard}
      initial={{ opacity: 0.5, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        delay: animationDelay,
        duration: 0.5,
        scale: { type: 'spring', visualDuration: 0.5, bounce: 0.2 },
      }}
    >
      <div className={styles.serviceCardIcon}>{icon}</div>
      <div className={styles.serviceCardDetails}>
        <h3 className={styles.serviceCardTitle}>{title}</h3>
        <p className={styles.serviceCardDescription}>{description}</p>
      </div>
    </motion.div>
  );
}
