import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Google Clone</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<>This is the search page</>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
