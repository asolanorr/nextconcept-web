import CustomSoftIcon from '@/assets/customSoftIcon';
import MobileDevIcon from '@/assets/mobileDevIcon';
import UiuxIcon from '@/assets/uiuxIcon';
import WebDevIcon from '@/assets/webDevIcon';
import Button from '@/components/button/button';
import Navbar from '@/components/navbar/navbar';
import Image from 'next/image';
import heroImage from '../assets/hero-image.png';
import ServiceCard from './_components/ServiceCard/serviceCard';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />

      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroTextContainer}>
          <h1 className={styles.heroTitle}>
            We help you to bring your next concept to life_
          </h1>
          <p className={styles.heroDescription}>
            At Next Concept, we specialize in transforming innovative ideas into
            exceptional digital solutions. Whether it's web development, mobile
            applications, or tailored software, our team is dedicated to
            delivering top-tier services that align with your vision and goals.
          </p>
          <Button title="Let's Talk" color="primary" />
        </div>
        <div className={styles.heroImageContainer}>
          {/* <Image
            src={gridImage}
            width={500}
            height={500}
            style={{ position: 'absolute', top: 150, left: '50vh', zIndex: 1 }}
            alt="Picture of the author"
          /> */}
          <Image
            src={heroImage}
            width={600}
            height={600}
            style={{ objectFit: 'contain' }}
            alt="Phone Mock Up"
          />
        </div>
      </div>

      {/* Services Section */}
      <div className={styles.servicesSection}>
        <div className={styles.servicesTextContainer}>
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
          <Button title="Interested? Let’s chat!" color="white" />
        </div>

        <div className={styles.servicesContainer}>
          {/* Service: Web Development */}
          <ServiceCard
            icon={<WebDevIcon />}
            title="Web Development"
            description="We create responsive, high-performing websites tailored to your needs, ensuring a seamless experience for your users and a strong online presence for your business."
          />

          {/* Service: Mobile Development */}
          <ServiceCard
            icon={<MobileDevIcon />}
            title="Mobile Development"
            description="From intuitive interfaces to powerful functionality, we develop mobile apps that connect you with your audience on their favorite devices, delivering innovation on the go."
          />

          {/* Service: UI/UX Design */}
          <ServiceCard
            icon={<UiuxIcon />}
            title="UI/UX Design"
            description="Great design is more than aesthetics—it’s about creating meaningful experiences. We craft user interfaces and experiences that are intuitive, engaging, and aligned with your brand."
          />

          {/* Service: Custom Software Solutions */}
          <ServiceCard
            icon={<CustomSoftIcon />}
            title="Custom Software Solutions"
            description="Every business is unique, and so are its challenges. We design and develop software tailored to your goals, helping you streamline processes, increase efficiency, and grow."
          />
        </div>
      </div>
    </div>
  );
}
