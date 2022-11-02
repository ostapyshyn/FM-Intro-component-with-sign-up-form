import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion as m } from 'framer-motion';
import styles from './Message.module.scss';
import { AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';

const Message = () => {
  const location = useLocation();

  const [pieces, setPieces] = useState(200);

  const stopConfetti = () => {
    setTimeout(() => {
      setPieces(0);
    }, 3000);
  };

  useEffect(() => {
    stopConfetti();
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={styles.message}>
          <div className={styles.info}>
            <p>
              Thanks for the Email {location.state.firstName} {location.state.lastName}✨
            </p>
            <p className={styles.email}>
              We have sent you an email over at {location.state.email}. We will get back to you as
              soon as we can!
            </p>
          </div>
        </m.div>
      </AnimatePresence>
      <Confetti gravity={0.2} numberOfPieces={pieces} />
    </>
  );
};

export default Message;
