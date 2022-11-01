import Form from './components/Form';
import InfoBlock from './components/InfoBlock';
import InfoPanel from './components/InfoPanel/InfoPanel';
import styles from './App.module.scss';
import { Routes, Route } from 'react-router-dom';
import Message from './components/Message';

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div className={styles.app}>
              <div className={styles.info}>
                <InfoBlock />
              </div>
              <div className={styles.form}>
                <InfoPanel />
                <Form />
              </div>
            </div>
          }
        />

        <Route path="/success" element={<Message />} />
      </Routes>
    </>
  );
}

export default App;
