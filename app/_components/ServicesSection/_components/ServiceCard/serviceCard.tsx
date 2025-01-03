import styles from './serviceCard.module.css';

interface ServiceCard {
  icon: any;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCard) {
  return (
    <div className={styles.serviceCard}>
      <div className={styles.serviceCardIcon}>{icon}</div>
      <div className={styles.serviceCardDetails}>
        <h3 className={styles.serviceCardTitle}>{title}</h3>
        <p className={styles.serviceCardDescription}>{description}</p>
      </div>
    </div>
  );
}
