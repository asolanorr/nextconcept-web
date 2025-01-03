import styles from '@/app/_components/WhyUsSection/_components/TextCard/textCard.module.css';

interface TextCard {
  title: string;
  description: string;
}

export default function TextCard({ title, description }: TextCard) {
  return (
    <div className={styles.textCard}>
      <h2 className={styles.textCardTitle}>{title}</h2>
      <p className={styles.textCardDescription}>{description}</p>
    </div>
  );
}
