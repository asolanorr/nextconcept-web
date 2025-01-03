import Navbar from '@/components/navbar/navbar';
import ContactSection from './_components/ContactSection/contactSection';
import FooterSection from './_components/FooterSection/footerSection';
import HeroSection from './_components/HeroSection/heroSection';
import OurProcessSection from './_components/OurProcessSection/ourProcessSection';
import ServicesSection from './_components/ServicesSection/servicesSection';
import WhyUsSection from './_components/WhyUsSection/whyUsSection';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <OurProcessSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
