import Form from './components/Form';
import InfoBlock from './components/InfoBlock';
import InfoPanel from './components/InfoPanel/InfoPanel';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.info}>
        <InfoBlock />
      </div>
      <div className={styles.form}>
        <InfoPanel />
        <Form />
      </div>
    </div>
  );
}

export default App;
