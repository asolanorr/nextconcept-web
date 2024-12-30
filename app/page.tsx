import Button from '@/components/button/button';
import Navbar from '@/components/navbar/navbar';
import Image from 'next/image';
import heroImage from '../assets/hero-image.png';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
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
          <Button />
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
            width={800}
            height={800}
            style={{ objectFit: 'contain' }}
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
}
