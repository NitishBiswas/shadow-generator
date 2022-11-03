import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import BoxShadow from './components/BoxShadow';
import Header from './components/Header';
import TextShadow from './components/TextShadow';

function App() {
  const [shadow, setShadow] = useState('box');

  const getShadow = (sd) => {
    setShadow(sd);
  }
  return (
    <div className="App">
      <div className="container d-flex flex-column">
        <Header onChange={getShadow} title={shadow === 'box' ? "Box" : "Text"} />
        <Routes>
          <Route path="/" index element={<BoxShadow />} />
          <Route path="/text-shadow" element={<TextShadow />} />
          <Route
            path="*"
            element={<BoxShadow />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
