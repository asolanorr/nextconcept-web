'use client';
import CursorBlinker from '@/components/HeroSection/_components/CursorBlinker/cursorBlinker';
import styles from '@/components/HeroSection/heroSection.module.css';
import Button from '@/components/button/button';
import useGoToSection from '@/utils/useGoToSection';
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from 'motion/react';
import { ReactNode, useEffect, useState } from 'react';

interface HeroSectionProps {
  title: string;
  description: string;
  ctaText: string;
  image: ReactNode;
  alternativeStyle: boolean;
}

export default function HeroSection({
  title,
  description,
  ctaText,
  image,
  alternativeStyle,
}: HeroSectionProps) {
  const baseText = title as string;
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [currentText, setCurrentText] = useState('');
  const goToContactSection = useGoToSection('contact');
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );

  useMotionValueEvent(displayText, 'change', (latest) => {
    setCurrentText(latest);
  });

  useEffect(() => {
    count.set(0); // Reset count
    const controls = animate(count, baseText.length, {
      type: 'tween',
      duration: 1.5,
      ease: 'easeInOut',
    });
    return controls.stop;
  }, [count, baseText.length]);

  return (
    <section
      id="home"
      className={`${styles.heroSection} ${alternativeStyle ? styles.whiteBackground : null}`}
    >
      <div
        className={`
          ${styles.heroContentContainer} 
          ${alternativeStyle ? styles.imageOnLeft : null} 
          ${alternativeStyle ? styles.removeBackgroundImage : null}
        `}
      >
        <div className={styles.heroTextContainer}>
          <motion.h1 className={styles.heroTitle}>
            {currentText}
            <CursorBlinker />
          </motion.h1>
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: [20, 0] }}
            transition={{ delay: 1, duration: 1.5 }}
          >
            <p className={styles.heroDescription}>{description}</p>
            <Button
              isSubmit={false}
              title={ctaText}
              color="primary"
              onClickFunction={goToContactSection}
            />
          </motion.section>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: [50, 0] }}
          transition={{ duration: 1.5 }}
          className={styles.heroImageContainer}
        >
          {image}
        </motion.div>
      </div>
    </section>
  );
}
