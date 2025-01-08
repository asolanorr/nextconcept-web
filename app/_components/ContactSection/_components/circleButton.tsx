'use client';
import { ReactNode } from 'react';
import styles from './circleButton.module.css';

interface CircleButtonProps {
  icon: ReactNode;
  onClickFunction?: any;
}
export default function CircleButton({
  icon,
  onClickFunction,
}: CircleButtonProps) {
  return (
    <button
      type="button"
      className={styles.circleButton}
      onClick={onClickFunction}
    >
      {icon}
    </button>
  );
}
