import styles from '@/app/_components/OurProcessSection/_components/Step/step.module.css';
import { motion } from 'motion/react';
import { useState } from 'react';

interface StepProps {
  stepNumber: string;
  title: string;
  description: string;
}

export default function Step({ stepNumber, title, description }: StepProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className={styles.stepContainer}
      animate={{
        height: isExpanded ? 'auto' : '80px',
      }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className={styles.stepNumber}>{stepNumber}</div>
      <motion.div
        className={styles.stepDetails}
        animate={{
          height: isExpanded ? 'auto' : '80px',
        }}
      >
        <h3 className={styles.stepTitle}>{title}</h3>
        <motion.p
          className={styles.stepDescription}
          animate={{
            height: isExpanded ? 'auto' : '0px',
            opacity: isExpanded ? '1' : '0',
          }}
        >
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
