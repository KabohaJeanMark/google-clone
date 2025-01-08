import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<>This is the search page</>} />
          <Route path="/about" element={<>This is the about page</>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
