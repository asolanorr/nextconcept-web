import styles from '@/app/_components/FooterSection/footerSeccion.module.css';
import EmailIcon from '@/assets/emailIcon';
import NextConceptLogoWhite from '@/assets/nextConceptLogoWhite';
import Button from '@/components/Button/button';
import Link from 'next/link';

export default function FooterSection() {
  return (
    <footer className={styles.footerSection}>
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
            <br />
            <br />
            <span>
              <EmailIcon color="white" />
              <p>contact@yournextconcept.com</p>
            </span>
          </div>
          <div className={styles.footerColumn}></div>
          <div className={styles.footerColumn}>
            <h4>Company</h4>
            <Link href="/about" title="About Us">
              About Us
            </Link>
            <Link href="/#" title="Contact Us">
              Contact Us
            </Link>
            <Link href="/#" title="FAQ">
              FAQ
            </Link>
          </div>
          <div className={styles.footerColumn}>
            <h4>Legal</h4>
            <Link href="/#" title="Privacy Policy">
              Privacy Policy
            </Link>
            <Link href="/#" title="Terms and Conditions of Service">
              Terms and Conditions of Service
            </Link>
          </div>
        </div>
        <div className={styles.foot}>
          <p>Developed with love by Next Concept &lt;3</p>
          <p>© 2025 | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
