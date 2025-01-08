'use client';

import styles from './button.module.css';

interface ButtonProps {
  title: string;
  color: 'white' | 'primary';
  isSubmit: true | false;
  onClickFunction?: any;
}

export default function Button({
  title,
  color,
  isSubmit,
  onClickFunction,
}: ButtonProps) {
  switch (color) {
    case 'white':
      return (
        <button
          type={isSubmit ? 'submit' : 'button'}
          className={`${styles.button} ${styles.white}`}
          onClick={onClickFunction}
        >
          {title}
        </button>
      );

    case 'primary':
      return (
        <button
          type={isSubmit ? 'submit' : 'button'}
          className={`${styles.button} ${styles.primary}`}
          onClick={onClickFunction}
        >
          {title}
        </button>
      );
    default:
  }
}
