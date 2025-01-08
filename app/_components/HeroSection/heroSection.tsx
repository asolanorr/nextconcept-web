'use client';
import CursorBlinker from '@/app/_components/CursorBlinker/cursorBlinker';
import styles from '@/app/_components/HeroSection/heroSection.module.css';
import Button from '@/components/button/button';
import useGoToSection from '@/utils/useGoToSection';
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from 'motion/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import heroImage from '../../../assets/hero-image.png';

export default function HeroSection() {
  const baseText = 'We help you to bring your next concept to life_' as string;
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
    <section id="home" className={styles.heroSection}>
      <div className={styles.heroContentContainer}>
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
            <p className={styles.heroDescription}>
              At Next Concept, we specialize in transforming innovative ideas
              into exceptional digital solutions. Whether it&lsquo;s web
              development, mobile applications, or tailored software, our team
              is dedicated to delivering top-tier services that align with your
              vision and goals.
            </p>
            <Button
              isSubmit={false}
              title="Let's Talk"
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
          <Image
            src={heroImage}
            width={600}
            height={600}
            style={{ objectFit: 'contain' }}
            alt="Phone Mock Up"
          />
        </motion.div>
      </div>
    </section>
  );
}
