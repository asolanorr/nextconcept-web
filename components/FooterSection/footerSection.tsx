'use client';

import InstagramIcon from '@/assets/instagramIcon';
import LinkedInIcon from '@/assets/linkedInIcon';
import NextConceptLogoWhite from '@/assets/nextConceptLogoWhite';
import Button from '@/components/button/button';
import useGoToSection from '@/utils/useGoToSection';
import Link from 'next/link';
import styles from './footerSeccion.module.css';

export default function FooterSection() {
  const goToContactSection = useGoToSection('contact');

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
          <Button
            onClickFunction={goToContactSection}
            isSubmit={false}
            title="Get in Touch"
            color="primary"
          />
        </div>
        <div className={styles.footerColumnsContainer}>
          <div className={styles.footerColumn}>
            <NextConceptLogoWhite />
            <p>Bring your next concept to life.</p>
            <br />
            {/* <span>
              <EmailIcon color="white" />
              <p>contact@yournextconcept.com</p>
            </span> */}
            <span>
              <Link
                href="https://www.linkedin.com/company/your-next-concept"
                target="_blank"
                title="LinkedIn"
              >
                <LinkedInIcon />
              </Link>
              <Link
                href="https://www.instagram.com/nextconcept.dev/"
                target="_blank"
                title="Instagram"
              >
                {' '}
                <InstagramIcon />
              </Link>
            </span>
          </div>
          <div className={styles.footerColumn}></div>
          <div className={styles.footerColumn}>
            <h4>Company</h4>
            <Link href="/about" title="About Us">
              About Us
            </Link>
            <Link href="/#contact" title="Contact Us">
              Contact Us
            </Link>
          </div>
          <div className={styles.footerColumn}>
            <h4>Legal</h4>
            <Link
              href="/NC_Privacy-Policy.pdf"
              target="_blank"
              title="Privacy Policy"
            >
              Privacy Policy
            </Link>
            <Link
              href="/NC_Terms-and-Conditions.pdf"
              target="_blank"
              title="Terms and Conditions of Service"
            >
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
