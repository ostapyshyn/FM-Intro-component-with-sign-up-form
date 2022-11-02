import { Routes, Route } from 'react-router-dom';
import Message from './components/Message';
import Main from './components/Main';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/success" element={<Message />} />
      </Routes>
    </>
  );
}

export default App;
