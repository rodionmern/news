import './App.css';

import Header from '../Header/Header';
import Feed from '../Feed/Feed';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Feed/>}></Route>
    </Routes>
    // This is place for Footer
    </>
  );
}

export default App;
