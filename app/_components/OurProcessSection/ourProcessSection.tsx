'use client';

import Button from '@/components/button/button';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import Step from '../OurProcessSection/_components/Step/step';
import styles from './ourProcessSection.module.css';

type StepType = {
  stepNumber: string;
  title: string;
  description: string;
};

const steps: StepType[] = [
  {
    stepNumber: '01',
    title: 'Planning & Requirement Gathering',
    description:
      'In this initial phase, we work closely with you to understand your goals and requirements. This is where we identify the project’s scope, target audience, and essential features, ensuring that we have a clear vision for what needs to be accomplished. Based on this information, we provide a detailed quote, outlining the costs and timelines. We’ll review this together to ensure all expectations are met before moving forward. This step is all about aligning expectations and laying the groundwork for a successful outcome.',
  },
  {
    stepNumber: '02',
    title: 'Design & Prototyping',
    description:
      'Once we have a clear understanding of the project, we move to designing the user interface and creating prototypes. This step helps us visualize the flow and structure of the project before development begins. We’ll collaborate with you to ensure the design reflects your vision, making any adjustments needed based on feedback.',
  },
  {
    stepNumber: '03',
    title: 'Development',
    description:
      'In the development phase, our team starts turning the designs into a functional product. Using the latest technologies, we focus on building a robust, scalable, and high-performing solution. Throughout this process, we maintain open communication to ensure the project is on track and meets the established requirements.',
  },
  {
    stepNumber: '04',
    title: 'Testing and Quality Assurance',
    description:
      'Testing is crucial to ensure that the product is free from bugs and performs as expected. We conduct thorough testing across different devices and browsers to identify and resolve any issues. Quality assurance is an ongoing priority to guarantee that the final product delivers a seamless user experience.',
  },
  {
    stepNumber: '05',
    title: 'Maintenance',
    description:
      'After launch, we offer continuous support to ensure the product stays up-to-date, secure, and running smoothly. Our maintenance services include regular updates, bug fixes, and scalability adjustments, keeping your product in top condition as your business grows and changes.',
  },
];

export default function OurProcessSection() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-80%']);

  return (
    <section ref={targetRef} className={styles.horizontalScrollCarousel}>
      <div className={styles.horizontalScrollCarouselContainer}>
        <div className={styles.left}>
          <motion.div
            style={{ x }}
            className={styles.horizontalScrollCarouselInner}
          >
            {steps.map((step) => {
              return (
                <Step
                  key={step.stepNumber}
                  stepNumber={step.stepNumber}
                  title={step.title}
                  description={step.description}
                />
              );
            })}
          </motion.div>
        </div>
        <div className={styles.right}>
          <div className={styles.OurProcessTextContainer}>
            <h1 className={styles.OurProcessTitle}>
              Our Proven, Flexible Process
            </h1>
            <p className={styles.OurProcessDescription}>
              At Next Concept, we follow a straightforward yet trustworthy
              process to ensure the success of every project. While each project
              may require unique steps tailored to its specific needs, we always
              start with a solid foundation of reliable, easy-to-follow steps.
              This flexible approach allows us to adapt to the project&lsquo;s
              requirements while maintaining consistency and quality throughout
              the development process.
            </p>

            <Button title="Interested? Let’s chat!" color="white" />
          </div>
        </div>
      </div>
    </section>
  );
}
