// import styles from '@/app/about/page.module.css';
import heroImage from '@/assets/about-image.png';
import laptopImage from '@/assets/laptop.png';
import storyImage from '@/assets/story.png';
import ContactSection from '@/components/ContactSection/contactSection';
import FooterSection from '@/components/FooterSection/footerSection';
import HeroSection from '@/components/HeroSection/heroSection';
import Navbar from '@/components/navbar/navbar';
import Image from 'next/image';
import OurValues from './_components/OurValues/ourValues';
import SimpleHero from './_components/SimpleHero/simpleHero';

export default function About() {
  const valuesArray = [
    {
      title: 'Innovation',
      description:
        'We embrace creativity and forward-thinking to turn unique ideas into impactful software solutions.',
    },
    {
      title: 'Quality',
      description:
        'Excellence is our standard. We deliver reliable, high-performing, and user-friendly software tailored to your needs.',
    },
    {
      title: 'Collaboration',
      description:
        'Working closely with our clients ensures that we bring their vision to life through a shared commitment to success.',
    },
    {
      title: 'Client Focus',
      description:
        'Your goals are our priority. We dedicate ourselves to understanding and meeting your unique requirements.',
    },
    {
      title: 'Trustworthiness',
      description:
        'Transparency and dependability are the cornerstones of our relationships, ensuring peace of mind at every stage.',
    },
  ];

  return (
    <section id="about">
      <Navbar />
      <HeroSection
        title="We specialize in turning ideas into reality."
        description="At Next Concept, we specialize in turning ideas into reality through custom software solutions. Whether you're envisioning a sleek web application, an intuitive mobile experience, or a powerful backend system, we’re here to make it happen. Our mission is simple: to bring your concept to life."
        ctaText="Get in touch"
        image={
          <Image
            src={heroImage}
            width={450}
            height={450}
            style={{ objectFit: 'contain' }}
            alt="Working Image"
          />
        }
        alternativeStyle={true}
      />
      <SimpleHero
        title="Our mission is simple:&#13;Bring your concept to life."
        description="Our commitment to innovation, quality, and collaboration. We
            believe every idea deserves a chance to shine, and our mission is
            to provide the tools and expertise to bring your vision to
            reality. With a focus on delivering tailor-made software, we aim
            to empower businesses to thrive in the digital age."
        image={
          <Image
            src={laptopImage}
            width={450}
            height={450}
            style={{ objectFit: 'contain' }}
            alt="Working Image"
          />
        }
        flipContent={false}
      />
      <SimpleHero
        title="Our story"
        description="Next Concept was born out of a passion for creating meaningful
                      digital experiences. We saw an opportunity to help businesses
                      transform their concepts into functional, user-friendly software.
                      Since day one, our goal has been to build solutions that meet our
                      client's needs and exceed their expectations."
        image={
          <Image
            src={storyImage}
            width={390}
            height={390}
            style={{ objectFit: 'contain' }}
            alt="Working Image"
          />
        }
        flipContent={true}
      />
      <OurValues valuesArray={valuesArray} />
      <ContactSection applyBackgroundColor={false} />
      <FooterSection />
    </section>
  );
}
