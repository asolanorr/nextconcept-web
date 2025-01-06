import styles from './button.module.css';

interface ButtonProps {
  title: string;
  color: 'white' | 'primary';
}

export default function Button({ title, color }: ButtonProps) {
  switch (color) {
    case 'white':
      return (
        <button className={`${styles.button} ${styles.white}`}>{title}</button>
      );

    case 'primary':
      return (
        <button className={`${styles.button} ${styles.primary}`}>
          {title}
        </button>
      );
    default:
  }
}
