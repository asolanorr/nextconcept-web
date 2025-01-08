'use client';
import styles from '@/app/_components/ServicesSection/servicesSection.module.css';
import CustomSoftIcon from '@/assets/customSoftIcon';
import MobileDevIcon from '@/assets/mobileDevIcon';
import UiuxIcon from '@/assets/uiuxIcon';
import WebDevIcon from '@/assets/webDevIcon';
import Button from '@/components/button/button';
import useGoToSection from '@/utils/useGoToSection';
import { motion } from 'motion/react';
import ServiceCard from './_components/ServiceCard/serviceCard';

export default function ServicesSection() {
  const goToContactSection = useGoToSection('contact');

  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.servicesContentContainer}>
        <motion.div
          className={styles.servicesTextContainer}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            scale: { type: 'spring', bounce: 0.1 },
          }}
        >
          <h2 className={styles.servicesTitle}>
            We Transform Ideas into Digital Solutions
          </h2>
          <p className={styles.servicesDescription}>
            At Next Concept, we offer a wide range of services to bring your
            ideas to life. From cutting-edge web development and mobile
            applications to intuitive UI/UX design and custom software tailored
            to your business needs, we’re here to help you achieve your goals
            with innovative digital solutions.
          </p>
          <Button
            onClickFunction={goToContactSection}
            isSubmit={false}
            title="Interested? Let’s chat!"
            color="white"
          />
        </motion.div>

        <div className={styles.servicesContainer}>
          {/* Service: Web Development */}
          <ServiceCard
            icon={<WebDevIcon />}
            title="Web Development"
            description="We create responsive, high-performing websites tailored to your needs, ensuring a seamless experience for your users and a strong online presence for your business."
            animationDelay={0.2}
          />

          {/* Service: Mobile Development */}
          <ServiceCard
            icon={<MobileDevIcon />}
            title="Mobile Development"
            description="From intuitive interfaces to powerful functionality, we develop mobile apps that connect you with your audience on their favorite devices, delivering innovation on the go."
            animationDelay={0.4}
          />

          {/* Service: UI/UX Design */}
          <ServiceCard
            icon={<UiuxIcon />}
            title="UI/UX Design"
            description="Great design is more than aesthetics—it’s about creating meaningful experiences. We craft user interfaces and experiences that are intuitive, engaging, and aligned with your brand."
            animationDelay={0.6}
          />

          {/* Service: Custom Software Solutions */}
          <ServiceCard
            icon={<CustomSoftIcon />}
            title="Custom Software Solutions"
            description="Every business is unique, and so are its challenges. We design and develop software tailored to your goals, helping you streamline processes, increase efficiency, and grow."
            animationDelay={0.8}
          />
        </div>
      </div>
    </section>
  );
}
