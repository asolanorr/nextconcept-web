import CloseIcon from '@/assets/closeIcon';
import SuccessAnimatedIcon from '@/assets/successAnimatedIcon/successAnimatedIcon';
import { AnimatePresence, motion } from 'motion/react';
import { Dispatch, SetStateAction, useEffect } from 'react';
import styles from './modal.module.css';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Modal({ isOpen, setIsOpen }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setIsOpen(false);
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, setIsOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.modal}
          initial={{ x: 500 }}
          animate={{ x: -20 }}
          exit={{ x: 700 }}
          transition={{ type: 'spring' }}
        >
          <div className={styles.modalContent}>
            <div className={styles.icon}>
              <SuccessAnimatedIcon />
            </div>
            <div className={styles.text}>
              Thank you for reaching out! We’ve received your message and will
              get back to you shortly.
            </div>
            <div className={styles.modalFooter}>
              <button
                className={styles.modalButton}
                onClick={() => setIsOpen(false)}
              >
                <CloseIcon />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
