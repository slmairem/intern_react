import './App.css';
import Navbar from './components/navbar';
import Homepage from './pages/homepage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
          
      </Router>  
    </div>
  );
}

export default App;
