import React from 'react';
import styles from './InfoPanel.module.scss';


function InfoPanel() {
  return (
    <section className={styles.panel}>
      Try it free 7 days <span>then $20/mo. thereafter</span>
    </section>
  );
}

export default InfoPanel;
