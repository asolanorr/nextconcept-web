import ContactSection from '@/components/ContactSection/contactSection';
import Navbar from '@/components/navbar/navbar';
import Link from 'next/link';
import styles from './page.module.css';

export default function NotFound() {
  return (
    <main className={styles.notFoundContainer}>
      <Navbar />
      <section className={styles.notFoundContentContainer}>
        <h1 className={styles.notFoundTitle}>Oops! Looks like you’re lost.</h1>
        <h3 className={styles.notFoundSubTitle}>
          This page doesn’t exist, but don’t worry—we’re here to help bring you
          back on track!
        </h3>
        <p>
          It seems the concept you were looking for didn’t come to life (yet).
          While we’re not sure how you got here, we can guide you to the right
          place.
        </p>
        <p>
          Check out our
          <strong>
            <Link href="/"> Home Page </Link>
          </strong>{' '}
          or explore our{' '}
          <strong>
            <Link href="/#services"> Services </Link>
          </strong>{' '}
          to see how we can bring your ideas to life. If you think this is a
          mistake, feel free to
          <strong>
            <Link href="mailto:contact@yournextconcept.com"> Contact Us </Link>
          </strong>
          .
        </p>
      </section>
      <ContactSection applyBackgroundColor={false} hideHeader={true} />
    </main>
  );
}
