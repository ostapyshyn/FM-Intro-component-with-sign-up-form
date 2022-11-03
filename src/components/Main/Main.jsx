import React from 'react';
import Form from '../Form';
import InfoBlock from '../InfoBlock';
import InfoPanel from '../InfoPanel';
import styles from './Main.module.scss';
import { motion as m } from 'framer-motion';

const Main = () => {
  return (
    <m.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.app}>
      <div className={styles.info}>
        <InfoBlock />
      </div>
      <div className={styles.form}>
        <InfoPanel />
        <Form />
      </div>
    </m.main>
  );
};

export default Main;
