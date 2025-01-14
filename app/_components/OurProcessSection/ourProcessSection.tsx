'use client';

import Button from '@/components/button/button';
import useGoToSection from '@/utils/useGoToSection';
import { motion } from 'motion/react';
import Step from './_components/Step/step';
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
  const goToContactSection = useGoToSection('contact');

  return (
    <section id="our-process" className={styles.ourProcessSection}>
      <div className={styles.ourProcessContentContainer}>
        <div className={styles.left}>
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
        </div>
        <div className={styles.right}>
          <motion.div
            className={styles.OurProcessTextContainer}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              scale: { type: 'spring', bounce: 0.1 },
            }}
          >
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

            <Button
              onClickFunction={goToContactSection}
              isSubmit={false}
              title="Interested? Let’s chat!"
              color="white"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
