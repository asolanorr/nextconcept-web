'use client';

import { MouseEventHandler } from 'react';
import styles from './button.module.css';

interface ButtonProps {
  title: string;
  color: 'white' | 'primary';
  isSubmit: true | false;
  onClickFunction?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export default function Button({
  title,
  color,
  isSubmit,
  onClickFunction,
  disabled,
}: ButtonProps) {
  switch (color) {
    case 'white':
      return (
        <button
          type={isSubmit ? 'submit' : 'button'}
          className={`${styles.button} ${styles.white}`}
          onClick={onClickFunction}
          disabled={disabled}
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
          disabled={disabled}
        >
          {title}
        </button>
      );
    default:
  }
}
