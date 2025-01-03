import styles from '@/app/_components/OurProcessSection/_components/Step/step.module.css';

interface Step {
  stepNumber: string;
  title: string;
  description: string;
}

export default function Step({ stepNumber, title, description }: Step) {
  return (
    <div className={styles.stepContainer}>
      <div className={styles.stepNumber}>{stepNumber}</div>
      <div className={styles.stepDetails}>
        <h3 className={styles.stepTitle}>{title}</h3>
        <p className={styles.stepDescription}>{description}</p>
      </div>
    </div>
  );
}
