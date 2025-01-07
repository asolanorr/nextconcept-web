import NextConceptLogo from '@/assets/nextConceptLogo';
import Link from 'next/link';
import Button from '../Button/button';
import styles from './navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.navContainerContent}>
        <div className={styles.logoContainer}>
          <NextConceptLogo />
        </div>

        <div className={styles.linksContainer}>
          <Link href="/" className={styles.navLink}>
            Services
          </Link>
          <Link href="/" className={styles.navLink}>
            Why Us
          </Link>
          <Link href="/" className={styles.navLink}>
            Our Process
          </Link>
          <Link href="/" className={styles.navLink}>
            Contact
          </Link>
        </div>

        <Button title="Get Started" color="white" />
      </div>
    </nav>
  );
}
