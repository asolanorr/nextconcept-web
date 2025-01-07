import styles from './button.module.css';

interface ButtonProps {
  title: string;
  color: 'white' | 'primary';
  isSubmit: true | false;
}

export default function Button({ title, color, isSubmit }: ButtonProps) {
  switch (color) {
    case 'white':
      return (
        <button
          type={isSubmit ? 'submit' : 'button'}
          className={`${styles.button} ${styles.white}`}
        >
          {title}
        </button>
      );

    case 'primary':
      return (
        <button
          type={isSubmit ? 'submit' : 'button'}
          className={`${styles.button} ${styles.primary}`}
        >
          {title}
        </button>
      );
    default:
  }
}
