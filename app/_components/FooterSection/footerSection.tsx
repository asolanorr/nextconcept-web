import styles from '@/app/_components/FooterSection/footerSeccion.module.css';
import NextConceptLogoWhite from '@/assets/nextConceptLogoWhite';
import Button from '@/components/button/button';

export default function FooterSection() {
  return (
    <div className={styles.footerSection}>
      <div className={styles.footerContentContainer}>
        <div className={styles.footerTextContainer}>
          <h3 className={styles.footerHeader}>
            Ready to Bring Your Vision to Life?
          </h3>
          <p className={styles.footerText}>
            We specialize in turning your ideas into powerful digital solutions.
            Whether it’s a custom web app, a dynamic e-commerce platform, or
            innovative software, our team is here to help you succeed. Let’s
            create something amazing together!
          </p>
          <Button title="Get in Touch" color="primary" />
        </div>
        <div className={styles.footerColumnsContainer}>
          <div className={styles.footerColumn}>
            <NextConceptLogoWhite />
            <p>Bring your next concept to life.</p>
          </div>
          <div className={styles.footerColumn}></div>
          <div className={styles.footerColumn}></div>
          <div className={styles.footerColumn}></div>
        </div>
      </div>
    </div>
  );
}
