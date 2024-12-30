import NextConceptLogo from '@/assets/nextConceptLogo';
import Button from '../button/button';
import styles from './navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.logoContainer}>
        <NextConceptLogo />
      </div>

      <div className={styles.linksContainer}>
        <a href="/" className={styles.navLink}>
          Services
        </a>
        <a href="/" className={styles.navLink}>
          Why Us
        </a>
        <a href="/" className={styles.navLink}>
          Our Process
        </a>
        <a href="/" className={styles.navLink}>
          Contact
        </a>
      </div>

      <Button />
    </nav>
  );
}
