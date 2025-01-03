import styles from '@/app/_components/ContactSection/contactSection.module.css';
import Button from '@/components/button/button';

export default function ContactSection() {
  return (
    <div className={styles.contactSection}>
      <div className={styles.contactContentContainer}>
        <div className={styles.contactTextContainer}>
          <h2 className={styles.contactHeader}>
            We’d love to hear about your ideas
          </h2>
          <h2 className={styles.contactHeader}>Let’s get in touch</h2>
          <p className={styles.contactText}>
            Whether you have a project in mind, want to collaborate, or just
            want to say hello, We’re always open to hearing about new
            opportunities.
            <br />
            Let's start a conversation and explore how we can work together to
            bring your ideas to life!
            <br />
            <br />
            Email: contact@yournextconcept.com
          </p>
        </div>
        <form className={styles.contactForm}>
          <div className={styles.formInputContainer}>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
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
              <label htmlFor="phone" className={styles.formLabel}>
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className={styles.formInput}
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.formLabel}>
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              className={styles.formTextarea}
            ></textarea>
          </div>
          <Button title="Send Message" color="primary" />
        </form>
      </div>
    </div>
  );
}
