import heroImage from '@/assets/home-image.png';
import ContactSection from '@/components/ContactSection/contactSection';
import Navbar from '@/components/navbar/navbar';
import Image from 'next/image';
import FooterSection from '../components/FooterSection/footerSection';
import HeroSection from '../components/HeroSection/heroSection';
import OurProcessSection from './_components/OurProcessSection/ourProcessSection';
import ServicesSection from './_components/ServicesSection/servicesSection';
import WhyUsSection from './_components/WhyUsSection/whyUsSection';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <HeroSection
        title="We help you to bring your next concept to life_"
        description="At Next Concept, we specialize in transforming innovative ideas
                      into exceptional digital solutions. Whether it&lsquo;s web
                      development, mobile applications, or tailored software, our team
                      is dedicated to delivering top-tier services that align with your
                      vision and goals."
        ctaText="Let's Talk"
        image={
          <Image
            src={heroImage}
            width={600}
            height={600}
            style={{ objectFit: 'contain' }}
            alt="Phone Mock Up"
          />
        }
        alternativeStyle={false}
      />
      <ServicesSection />
      <WhyUsSection />
      <OurProcessSection />
      <div className={styles.mTop300vh}>
        <ContactSection applyBackgroundColor={true} />
      </div>
      <FooterSection />
    </div>
  );
}
