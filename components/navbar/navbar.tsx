'use client';
import NextConceptLogo from '@/assets/nextConceptLogo';
import useGoToSection from '@/utils/useGoToSection';
import Link from 'next/link';
import Button from '../button/button';
import styles from './navbar.module.css';

export default function Navbar() {
  const goToContactSection = useGoToSection('contact');

  return (
    <nav className={styles.navContainer}>
      <div className={styles.navContainerContent}>
        <Link href="/#home" className={styles.logoContainer}>
          <NextConceptLogo />
        </Link>

        <div className={styles.linksContainer}>
          <Link href="/#services" className={styles.navLink}>
            Services
          </Link>
          <Link href="/#why-us" className={styles.navLink}>
            Why Us
          </Link>
          {/* <Link href="/#our-process" className={styles.navLink}>
            Our Process
          </Link> */}
          <Link href="/about" className={styles.navLink}>
            About Us
          </Link>
          <Link href="#contact" className={styles.navLink}>
            Contact
          </Link>
        </div>

        <Button
          onClickFunction={goToContactSection}
          isSubmit={false}
          title="Get Started"
          color="white"
        />
      </div>
    </nav>
  );
}
