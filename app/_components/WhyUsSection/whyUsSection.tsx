'use client';
import TextCard from '@/app/_components/WhyUsSection/_components/TextCard/textCard';
import styles from '@/app/_components/WhyUsSection/whyUsSection.module.css';
import { motion } from 'motion/react';

export default function WhyUsSection() {
  return (
    <div className={styles.whyUsSection}>
      <div className={styles.whyUsContentContainer}>
        <motion.div
          className={styles.whyUsTextContainer}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            scale: { type: 'spring', bounce: 0.1 },
          }}
        >
          <h1 className={styles.whyUsTitle}>Why Next Concept?</h1>
          <p className={styles.whyUsDescription}>
            At Next Concept, we’re not just about delivering software—we’re
            about creating solutions that drive results and bring your vision to
            life. Here’s what sets us apart:
          </p>
        </motion.div>
        <div className={styles.whyUsCardContainer}>
          <TextCard
            title="Client-Centric Approach"
            description="We prioritize your goals and collaborate closely to ensure every solution is tailored to your needs. Your success is our success."
            animationDelay={0.2}
          />

          <TextCard
            title="Full-Stack Expertise"
            description="With experience in web and mobile development, UI/UX design, and custom software solutions, we provide end-to-end support for all your projects."
            animationDelay={0.4}
          />

          <TextCard
            title="Innovation Meets Quality"
            description="We combine creativity and technical excellence to deliver solutions that are not only functional but also innovative and impactful."
            animationDelay={0.6}
          />

          <TextCard
            title="Clear Communication"
            description="Transparency and collaboration are at the heart of what we do. We keep you informed and involved at every step of the journey."
            animationDelay={0.8}
          />

          <TextCard
            title="On-Time Delivery"
            description="Your time is valuable, and we respect that. We deliver projects on schedule without compromising on quality."
            animationDelay={1}
          />
        </div>
      </div>
    </div>
  );
}
