import React from 'react';
import styles from './InfoBlock.module.scss';

const InfoBlock = () => {
  return (
    <section className={styles.info_block}>
      <h1>Learn to code by watching others</h1>
      <p>
        See how experienced developers solve problems in real-time. Watching scripted tutorials is
        great, but understanding how developers think is invaluable.
      </p>
    </section>
  );
};

export default InfoBlock;
