import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import './styles/App.css';

function App() {
  console.log("App is rendering")
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/about" element={<>This is the about page</>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
