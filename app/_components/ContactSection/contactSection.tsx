'use client';

import styles from '@/app/_components/ContactSection/contactSection.module.css';
import ArrowUpIcon from '@/assets/arrowUpIcon';
import Button from '@/components/button/button';
import useGoToSection from '@/utils/useGoToSection';
import { FormEvent } from 'react';
import CircleButton from './_components/circleButton';

export default function ContactSection() {
  const goToHeroSection = useGoToSection('home');

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const data: Record<string, string> = {};

    // Parsing FormData to JSON
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    await fetch('/api/mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    form.reset();
  }

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactContentContainer}>
        <div className={styles.contactTextContainer}>
          <h2 className={styles.contactHeader}>Let’s get in touch</h2>
          <h2 className={styles.contactHeader2}>
            We’d love to hear about your ideas
          </h2>
          <p className={styles.contactText}>
            Whether you have a project in mind, want to collaborate, or just
            want to say hello, We’re always open to hearing about new
            opportunities.
            <br />
            Let&lsquo;s start a conversation and explore how we can work
            together to bring your ideas to life!
            <br />
            <br />
            Email: contact@yournextconcept.com
          </p>
        </div>
        <form onSubmit={onSubmit} className={styles.contactForm}>
          <div className={styles.formInputContainer}>
            <div className={styles.formGroup}>
              <label htmlFor="fullName" className={styles.formLabel}>
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className={styles.formInput}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="company" className={styles.formLabel}>
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className={styles.formInput}
              />
            </div>
          </div>

          <div className={styles.formInputContainer}>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@email.com"
                className={styles.formInput}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone" className={styles.formLabel}>
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+1 (555) 555-5555"
                className={styles.formInput}
              />
            </div>
          </div>

          <div className={styles.formInputContainer}>
            <div className={styles.formGroupTextarea}>
              <label htmlFor="message" className={styles.formLabel}>
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Type your message here"
                className={styles.formTextarea}
              ></textarea>
            </div>
          </div>
          <Button isSubmit={true} title="Send Message" color="primary" />
        </form>
      </div>
      <span className={styles.goToTopButtonContainer}>
        <CircleButton
          icon={<ArrowUpIcon />}
          onClickFunction={goToHeroSection}
        />
      </span>
    </section>
  );
}
