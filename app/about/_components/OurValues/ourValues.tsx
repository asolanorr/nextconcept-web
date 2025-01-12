'use client';
import TextCard from '@/components/TextCard/textCard';
import { motion } from 'motion/react';
import styles from './ourValues.module.css';

type ValueType = {
  title: string;
  description: string;
};

interface OurValuesProps {
  valuesArray: Array<ValueType>;
}

export default function OurValues({ valuesArray }: OurValuesProps) {
  return (
    <section id="why-us" className={styles.ourValuesSection}>
      <div className={styles.ourValuesContentContainer}>
        <motion.div
          className={styles.ourValuesTextContainer}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            scale: { type: 'spring', bounce: 0.1 },
          }}
        >
          <h1 className={styles.ourValuesTitle}>Our values</h1>
          <p className={styles.ourValuesDescription}>
            At Next Concept, our work is guided by five core values:
          </p>
        </motion.div>
        <div className={styles.ourValuesCardContainer}>
          {valuesArray.map((value) => {
            return (
              <TextCard
                key={value.title}
                title={value.title}
                description={value.description}
                animationDelay={0.2}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
